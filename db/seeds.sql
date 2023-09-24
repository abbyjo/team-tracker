INSERT INTO department (id, name)
VALUES (001, "Sales"),
       (002, "Accounting"),
       (003, "R & D"),
       (004, "Public Relations"),
       (005, "Admin");

INSERT INTO role (id, title, salary, department_id,)
VALUES (001, "Sales Associates", 500000, 001),
       (002, "Accountant", 850000, 002 ),
       (003, "Researcher", 900500, 003),
       (004, "Public Relator", 750000, 004),
       (005, "Manager", 980500, 005);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Harrowhark", "Nonagesimus", 005, 005),
       (002, "Gideon", "Nav", 001, 005),
       (003, "Ianthe", "Tridentarius", 003, 005),
       (004, "Camilla", "Hect", 003, 005),
       (005, "Palamedes", "Sextus", 003, 005);

       
       