var Example = Example || {};

Example.sprites = function () {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create engine
    var engine = Engine.create(),
        world = engine.world;

    // create renderer
    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 700,
            height: 600,
            background: '#0f0f13',
            showAngleIndicator: false,
            wireframes: false
        }
    });

    Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var offset = 10,
        options = {
            isStatic: true
        };

    world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    World.add(world, [
        Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
        Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
        Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
        Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
    ]);

    // const singleMM = (x, y) => {
    //    let randomNumber = Math.floor(Common.random(0,6))
    //    let randomColor = ""
    //    if (randomNumber === 0) {
    //         console.log("its 0")
    //         randomColor = "red"
    //    }
    //    else if (randomNumber === 1) {
    //         console.log("its 1")
    //         randomColor = "orange"
    //    }
    //    else if (randomNumber === 2) {
    //         console.log("its 2")
    //         randomColor = "gold"
    //    }
    //    else if (randomNumber === 3) {
    //         console.log("its 3")
    //         randomColor = "blue"
    //    }
    //    else if (randomNumber === 4) {
    //          console.log("its 4")
    //          randomColor = "brown"
    //    }
    //    else if (randomNumber === 5) {
    //         console.log("its 5")
    //         randomColor = "green"
    //    }

    //    return Bodies.circle(x, y, 37, {
    //     render: {
    //         strokeStyle: '#ffffff',
    //         sprite: {
    //             texture: `./img/mms/${randomColor}.png`,
    //             xScale: 0.5,
    //             yScale: 0.5
    //         }
    //     }
    // })
    // };


    // var stack = Composites.stack(20, 20, 1, 1, 0, 0, function(x, y) {
    //     if ((Math.floor(Common.random(0,6))) === 0) {
    //         return Bodies.circle(x, y, 37, {
    //             render: {
    //                 strokeStyle: '#ffffff',
    //                 sprite: {
    //                     texture: './img/mms/red.png',
    //                     xScale: 0.5,
    //                     yScale: 0.5
    //                 }
    //             }
    //         });
    //     }
    //     else if ((Math.floor(Common.random(0,6))) === 1)   {
    //         return Bodies.circle(x, y, 37, {
    //             render: {
    //                 strokeStyle: '#ffffff',
    //                 sprite: {
    //                     texture: './img/mms/green.png',
    //                     xScale: 0.5,
    //                     yScale: 0.5
    //                 }
    //             }
    //         });
    //     }

    //     else if ((Math.floor(Common.random(0,6))) === 2) {
    //         return Bodies.circle(x, y, 37, {
    //             render: {
    //                 strokeStyle: '#ffffff',
    //                 sprite: {
    //                     texture: './img/mms/orange.png',
    //                     xScale: 0.5,
    //                     yScale: 0.5
    //                 }
    //             }
    //         });
    //     }
    //     else if ((Math.floor(Common.random(0,6))) === 3) {
    //         return Bodies.circle(x, y, 37, {
    //             render: {
    //                 strokeStyle: '#ffffff',
    //                 sprite: {
    //                     texture: './img/mms/gold.png',
    //                     xScale: 0.5,
    //                     yScale: 0.5
    //                 }
    //             }
    //         });
    //     }
    //     else if ((Math.floor(Common.random(0,6))) === 4) {
    //         return Bodies.circle(x, y, 37, {
    //             render: {
    //                 strokeStyle: '#ffffff',
    //                 sprite: {
    //                     texture: './img/mms/blue.png',
    //                     xScale: 0.5,
    //                     yScale: 0.5
    //                 }
    //             }
    //         });
    //     }

    //     else if ((Math.floor(Common.random(0,6))) === 5) {
    //         return Bodies.circle(x, y, 37, {
    //             render: {
    //                 strokeStyle: '#ffffff',
    //                 sprite: {
    //                     texture: './img/mms/brown.png',
    //                     xScale: 0.5,
    //                     yScale: 0.5
    //                 }
    //             }
    //         });
    //     }


    // });

    // World.add(world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);


    // var addCircle = function () {
    //     return Bodies.circle(Math.random()*400 + 30, 30, 30);
    //    };

    var addMM = function (color) {
        return Bodies.circle(Math.random() * 700, 30, 37, {
            render: {
                strokeStyle: '#ffffff',
                sprite: {
                    texture: `./img/mms/${color}.png`,
                    xScale: 0.5,
                    yScale: 0.5
                }
            }
        })
    };

    document.getElementById("btn-generate-mm").addEventListener("click", e => {
        console.log("click")
        let randomNumber = Math.floor(Common.random(0, 7))
        let randomColor = "red"
        if (randomNumber === 0) {
            console.log("its 0")
            randomColor = "red"
        }
        else if (randomNumber === 1) {
            console.log("its 1")
            randomColor = "orange"
        }
        else if (randomNumber === 2) {
            console.log("its 2")
            randomColor = "gold"
        }
        else if (randomNumber === 3) {
            console.log("its 3")
            randomColor = "blue"
        }
        else if (randomNumber === 4) {
            console.log("its 4")
            randomColor = "brown"
        }
        else if (randomNumber === 5) {
            console.log("its 5")
            randomColor = "green"
        }
        else if (randomNumber === 6) {
            console.log("its 6")
            randomColor = "marlow"
        }
        // Composites.add(stack);
        World.add(engine.world, addMM(randomColor));

    })


    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: 800, y: 600 }
    });

    // context for MatterTools.Demo
    return {
        engine: engine,
        runner: runner,
        render: render,
        canvas: render.canvas,
        stop: function () {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

if (typeof module !== 'undefined') {
    module.exports = Example[Object.keys(Example)[0]];
}