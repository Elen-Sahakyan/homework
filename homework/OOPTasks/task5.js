class InvalidJobPostingError extends Error {
    constructor(m) {
        super(m);
        this.name = 'InvalidJobPostingError';
    }
}

class ApplicationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ApplicationError';
    }
}

class AuthorizationError extends Error {
    constructor(message) {
        super(m);
        this.name = 'AuthorizationError';
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError'
    }
}

function validate(condition, message, ErrorType = ValidationError) {
    if(!condition) {
        throw new ErrorType(message);
    }
}

const contactInfo = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	phone: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
}

const validators = {
    isValidString(value) {
        return value && typeof value === "string";
    },
    isValidEmail(value) {
        return contactInfo.email.test(value);
    },
    isValdidPhone(value) {
        return contactInfo.phone.test(value);
    },
    isValidAge(value) {
        return Number.isFinite(value) && value > 0 && value < 100;
    },
    isValidSalary(value) {
        return Number.isFinite(value) && value > 0;
    },
    isInstanceOf(child, parent) {
        return child instanceof parent;
    },
    isValidNumber(value) {
        return Number.isFinite(value) && value > 0;
    },
}

/**
 * abstract class for creating postings 
 * @abstract
 */
class JobPostingOperation {
    static postings = [];
    static id = 0;
    constructor(
        position, company, JobDescription, ageFrom, ageTo, salary) {
        if(new.target === JobPosting) {
            throw new TypeError('abstract class cannot have an instance');
        }
        validate(
            validators.isValidString(position),
            'position must be a non-empty string'
        )
        validate(
            validators.isInstanceOf(company, Company),
            'company must be an instance of class Company'
        )
        validate(
            validators.isValidString(JobDescription),
            'job Description must be non-empty string'
        )
        validate(
            validators.isValidAge(ageFrom),
            'age must be a positive number'
        )
        validate(
            validators.isValidAge(ageTo),
            'age must be a positive number'
        )
        validate(
            validators.isValidSalary(salary),
            'salary must be a positive number'
        )
        this.position = position;
        this.company = company.name;
        this.JobDescription = JobDescription;
        this.ageFrom = ageFrom;
        this.ageTo = ageTo;
        this.salary = salary;
        this.status;
    }

    createPosting() {
        throw new TypeError('abstract method must be implemented');
    }
    deletePosting() {
        throw new TypeError('abstract method must be implemented');
    }
    listPostings() {
        throw new TypeError('abstract method must be implemented');
    }
}

class FullTimeJob extends JobPostingOperation {
    constructor(position, company, JobDescription, ageFrom, ageTo, salary) {
        super(position, company, JobDescription, ageFrom, ageTo, salary);
        this.type = 'Full time';
        this.id = JobPostingOperation.id++;
    }

    createPosting() {
        JobPostingOperation.postings.push(this);
        return JobPostingOperation.id;
    }

    deletePosting() {
        let found = false;
        for(let i = 0; i < JobPostingOperation.postings.length; i++) {
            if(JobPostingOperation.id === JobPostingOperation.postings[i].id) {
                found = true;
                JobPostingOperation.postings.splice(i, 1);
                return true;                
            }
        }
        if(!found) {
            return false;
        }    
    }

    listPostings() {
        return [...JobPostingOperation];
    }
}

class PartTimeJob extends JobPostingOperation {
    constructor(position, company, JobDescription, ageFrom, ageTo, salary, workingHours) {
        super(position, company, JobDescription, ageFrom, ageTo, salary);

        validate(
            validators.isValidNumber(workingHours),
            'working hours cannot be negative'
        )
        this.workingHours = workingHours;
        this.type = 'Half time';
        this.id = JobPostingOperation.id++;
    }

    createPosting() {
        JobPostingOperation.postings.push(this);
        return JobPostingOperation.id;
    }

   deletePosting() {
        let found = false;
        for(let i = 0; i < JobPostingOperation.postings.length; i++) {
            if(JobPostingOperation.id === JobPostingOperation.postings[i].id) {
                found = true;
                JobPostingOperation.postings.splice(i, 1);
                return true;                
            }
        }
        if(!found) {
            return false;
        }    
    }

    listPostings() {
        return [...JobPostingOperation];
    }    
    
}

/**
 * creates a company
 */
class Company {
    constructor(name, contact) {
        validate(
            validators.isValidString(name),
            'name must be a non-empty string'
        )
        validate(
            validators.email.test(contact) || 
            validators.phone.test(contact),
            'E-Mail-Adress or Phone-number invalid',
        )
        this.name = name;
        this.contact = contact;
        this.jobPostings = [];
    }

    /**
     * Pushes the posting into the posting array of class company
     * @param {number} postingId - ID of the posting
     */
    addPosting(postingId) {
        validate(
            validators.isValidNumber(postingId),
            'posting ID must be a positive number',
            InvalidJobPostingError
        )
        for(let i = 0; i < JobPostingOperation.postings.length; i++) {
            if(JobPostingOperation.postings[i].id === postingId) {
                this.jobPostings.push(JobPostingOperation.postings[i]);        
            }
        }
    }

    /**
     * Changes only following two parameters
     * @param {number} id - the id of the job posting
     * @param {string} JobDescription - the description of the job
     * @param {number} salary - amount of salary
     */
    editPosting(id, JobDescription, salary) {
        validate(
            validators.isValidNumber(id) &&
            validators.isValidString(JobDescription) ||
            validators.isValidNumber(salary),
            'invalid parameter',
            AuthorizationError
        )
        for(let i of this.jobPostings) {
            if(i.id === id) {
                if(JobDescription) {
                    i.JobDescription = JobDescription;
                }
                if(salary) {
                    i.salary = salary;
                    return;
                }
            }
        }
    }

    removePosting(id) {
        validate(
            validators.isValidNumber(id),
            'ID must be a positive number'
        )
        let found = false;
        for(let i = 0; i < this.postings.length; i++) {
            if(this.postings[i].id === id) {
                this.postings.splice(i, 1);
                found = true;
                return;
            }
        }
        if(!found) {
            throw new AuthorizationError('job posting not found');
        }
    }

    viewApplications

}

class JobSeeker {
    constructor(name, contact, resume) {
        validate(
            validators.isValidString(name),
            'name must be a non-empty string'
        )
        validate(
            validators.email.test(contact) || 
            validators.phone.test(contact),
            'E-Mail-Adress or Phone-number invalid',
        )
        validate(
            validators.isValidString(resume),
            'resume must be a non-empty string'
        )
        this.name = name;
        this.contact = contact;
        this.resume = resume;
        this.applications = [];        
    }

    search(criteria) {
        validate(
            validators.isInstanceOf(criteria, Criteria),
            'criteria must be an instanse of class Criteria'
        )
        return JobPostingOperation.postings.filter(posting => {
            if(criteria.position && criteria.position !== posting.position) {
                return false;
            }
            if(criteria.company && criteria.company !== posting.compamy) {
                return false;
            }
            if(criteria.ageFrom && criteria.ageFrom !== posting.ageFrom) {
                return false;
            }
            if(criteria.ageTo && criteria.ageTo !== posting.ageTo) {
                return false;
            }
            return true;
        });
    }

    apply() {

    }

}

class Criteria {
    constructor(position, company, ageFrom, ageTo, salary) {
        validate(
            validators.isValidString(position),
            'position must be a non-empty string' 
        )
        validate(
            validators.isInstanceOf(company, Company),
            'company must be an instance ob class Company'
        )
        validate(
            validators.isValidAge(ageFrom),
            'age must be a positive number'
        )
        validate(
            validators.isValidAge(ageTo),
            'age must be a positive number'
        )
        validate(
            isValidSalary(salary),
            'salary must be a positive number'
        )
        this.position = position;
        this.company = company.name;
        thid.ageFrom = ageFrom;
        thid.ageTo = ageTo;
        this.salary = salary;
    }
}



