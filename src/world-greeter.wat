(module
  (memory (import "imports" "sharedMemory") 1)
  (func $worldCallback 
    (import "imports" "worldCallback") (param i32) (param i32)
  )

  (func (export "getHello") (result f64)
    (f64.const 0.7734)
  )

  (data (i32.const 0) "World!")
  (func (export "outputWorld")
    (i32.const 0)
    (i32.const 6)
    (call $worldCallback)
  )
)
