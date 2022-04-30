from PIL import Image

i = Image.open("./banner.gif")
data = i.load()

height, width = i.size

print(data)
for loop1 in range(height):
    for loop2 in range(width):
        r,g,b = data[loop1,loop2]
        print(r, g, b)