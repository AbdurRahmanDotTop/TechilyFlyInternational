INSERT INTO users (id, email, role) VALUES ('emp_123', 'employee@techilyfly.com', 'EMPLOYER');
INSERT INTO employers (id, user_id, company_name, verification_status) VALUES ('mock_emp_123', 'emp_123', 'Tech Corp Gulf', 'VERIFIED');

INSERT INTO jobs (id, employer_id, title, slug, description, status, expiry_at, country, city, accepting_applications) 
VALUES ('1', 'mock_emp_123', 'Senior Software Engineer', 'senior-software-engineer-dubai', 'We are looking for a Senior Software Engineer with 5+ years of experience in React and Node.js to join our expanding team in Dubai.', 'PUBLISHED', '2026-12-31', 'United Arab Emirates', 'Dubai', 1);

INSERT INTO jobs (id, employer_id, title, slug, description, status, expiry_at, country, city, accepting_applications) 
VALUES ('2', 'mock_emp_123', 'Marketing Director', 'marketing-director-riyadh', 'Lead our marketing team in Riyadh.', 'PUBLISHED', '2025-12-31', 'Saudi Arabia', 'Riyadh', 1);

INSERT INTO jobs (id, employer_id, title, slug, description, status, expiry_at, country, city, accepting_applications) 
VALUES ('3', 'mock_emp_123', 'Civil Engineer', 'civil-engineer-doha', 'Al-Khaleej Constructions needs an experienced Civil Engineer.', 'PUBLISHED', '2025-06-30', 'Qatar', 'Doha', 1);
