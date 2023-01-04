module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define('Genre', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false        
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false        
        },
        name: {
            type: dataTypes.STRING,
             allowNull: false
        }
    
    }, {
        tableName: 'genres'
    })
    
    Genre.associate = function(models) {
        Genre.hasMany(models.Book, {
            foreignKey: {
                name: 'genreId'
            },
            as:'books'
        })
    }
        return Genre;
    }
    
    