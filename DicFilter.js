const marks = [{id:'s1',marks:{'physics':100,'maths':80}},
{id:'s2',marks:{'physics':60,'maths':40}},
{id:'s3',marks:{'physics':70,'maths':90} },
{id:'s4',marks:{'physics':50,'maths':85}},
{id:'s5',marks:{'physics':30,'maths':75}}];
    

const res=marks.filter((ele)=>{
        if (ele.marks.physics>=50 && ele.marks.maths>=50){
            console.log(ele.id)
            console.log(ele.marks)
        }
    })
    