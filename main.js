noseX=""
noseY=""

function preload(){
mustache= loadImage("https://i.postimg.cc/XYyF3xtb/mustache.png")
    }

    function setup(){
        canvas = createCanvas(300, 300)
        canvas.center()
        video=createCapture(VIDEO)
        video.size(300, 300)
    
        video.hide();
    
        poseNet= ml5.poseNet(video, modelLoaded)
        poseNet.on('pose', gotPoses)
    }

    function modelLoaded(){
        console.log('PoseNet is Intialized')
    }

    function draw() {
        image(video, 0, 0, 300, 300)
        image(mustache, noseX, noseY, 40, 40)
        }

        function take_snapshot(){
            save('myFilterImage.png')
        }

        function gotPoses(results)
        {
            if(results.length>0)
            {
                console.log(results)
                noseX = results[0].pose.nose.x-15
                noseY = results[0].pose.nose.y-5
        
                console.log(noseX,noseY)
            }
        }


    