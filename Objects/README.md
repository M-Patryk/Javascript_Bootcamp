Intro to objects

About referencing
If we do:
const dic1 = {
    asd = 'asd',
    asd = 'asd',
    asd = 'asd'
}

and then:

const dic2 = dic1

And we update dic1 by adding something:
dic1['dsad'] = "adding someting"

the dic2 changes as well!

A to dlatego, ze ta zmienna nie jest zapisywana z wartosciami, a tylko z ODNIESIENIEM DO NIEJ