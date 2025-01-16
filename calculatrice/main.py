# exo 5 
# exo 5.2
lumiere_allumee = True
il_fait_jour = True

fermer_rideaux = (lumiere_allumee and il_fait_jour)
print(fermer_rideaux)

# exo6
P = True
Q = False

reponse = input("Est ce que P and Q est vrai ?")

if reponse == str(P and Q):
    print("correct")
else:
    print("faux")

# exo7
P = input("Entrez True ou False pour P : ") == "True"
Q = input("Entrez True ou False pour Q : ") == "True"

print("P AND Q :", P and Q)
print("P OR Q :", P or Q)
print("NOT P :", not P)
print("P           Q :", not P or Q)

# exo8
remis = input("As t'il remis le devoir ? (True/False)")
delai = input("As t'il remis le devoir ? (True/False)")
note = input("As t'il remis le devoir ? (True/False)")

if (remis == "True" or remis == "True") and (note == "False"):
    accepte = True
