CREATE DATABASE uffs_curso;

\c uffs_curso;

CREATE TABLE  if not exists  major(
    mid serial,
    mname varchar(32) not null,
    mdesc varchar(255) not null,
    constraint pk_major primary key (mid)
);

CREATE TABLE  if not exists schedule(
    schid integer not null,
    mid integer not null,
    cseg integer not null,
    cter integer not null,
    cqua integer not null,
    cqui integer not null,
    csex integer not null,
    constraint pk_schedule primary key (schid),
    constraint fk_schedule_major foreign key (mid) references major(mid),
    constraint fk_schedule_daily_seg foreign key (cseg) references daily(hid),
    constraint fk_schedule_daily_ter foreign key (cter) references daily(hid),
    constraint fk_schedule_daily_qua foreign key (cqua) references daily(hid),
    constraint fk_schedule_daily_qui foreign key (cqui) references daily(hid),
    constraint fk_schedule_daily_sex foreign key (csex) references daily(hid)
);

CREATE TABLE  if not exists daily(
    hid serial,
    diasem integer not null,
    ccr1 integer,
    ccr2 integer,
    ccr3 integer,
    ccr4 integer,
    ccr5 integer,
    ccr6 integer,
    constraint fk_daily_ccr1 foreign key (ccr1) references ccr(ccrid),
    constraint fk_daily_ccr2 foreign key (ccr2) references ccr(ccrid),
    constraint fk_daily_ccr3 foreign key (ccr3) references ccr(ccrid),
    constraint fk_daily_ccr4 foreign key (ccr4) references ccr(ccrid),
    constraint fk_daily_ccr5 foreign key (ccr5) references ccr(ccrid),
    constraint fk_daily_ccr6 foreign key (ccr6) references ccr(ccrid)  
);

CREATE TABLE  if not exists ccr(
    ccrid serial,
    cid integer not null,
    ccrname varchar(32) not null,
    constraint pk_ccr primary key (ccrid)
    --constraint fk_ccr_major foreign key major(mid)
);