    var team1 = [];
    var team2 = [];
    function Stack1(){
    this.push = function(ele){
        team1.push(ele);
    }
    this.pop = function(){
        return team1.pop();
    }
    }
    function Stack2(){
    this.push = function(ele){
        team2.push(ele);
    }
    this.pop = function(){
        return team2.pop();
    }
    }
    var stack1 = new Stack1();
    var stack2 = new Stack2();
    function Queue(){
    this.in = function(ele){
        stack1.push(ele);
        console.log(team1);
    this.out =function(){
        var i=0;
        var n;
        var res=0;
        var len1 = team1.length;
        var len2;
        var res;
        for (i=0;i<(len1-1);i++){
            n = stack1.pop();
            stack2.push(n);
        }
        res=stack1.pop();
        len2=team2.length;
        for(i=0;i<(len2);i++){
            n = stack2.pop();
            stack1.push(n);
        }
        console.log(team1); 
        return res;   
    }
    }
    }
    var queue = new Queue();
    queue.in(A);
    queue.in(B);
    queue.in(C);
    queue.in(D);
    queue.out();
    queue.out();
