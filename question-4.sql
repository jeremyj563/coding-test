-- 4. Employees and UIN

select
    e.name,
    u.uin
from employee as e
left join employee_uin as u
    on e.id = u.id
;