# Primer ejercicio DDF

Descripcion:

VAGO:

Representa un algoritmo que cuente de un numero hacia abajo

Específico:

Representa un algoritmo que imprima en la consola los numeros empezando en un numero dado por el usuario hasta el 1.

Entradas:

- numero que provee el usuario (type: number)

Proceso:

() para rectangulo

{} para rombo

```mermaid
flowchart 
  A([inicio]) --> B
  B(solicitar dato) --> C
  C(guardamos dato en 'number') --> D
  D{'number' es de tipo numero y mayor que cero} -- si --> E
  D -- no --> F
  F(alertar al usuario) --> B
  E(imprimir number) --> G
  G(number - 1) --> H
  H{number = 0} -- no --> E
  H -- sí --> J([Fin!])
```

Salida:

(asumiendo que el numero proveido por el usuario es 5)

```bash
5
4
3
2
1
```
