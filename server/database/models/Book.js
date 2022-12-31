module.exports = (sequelize, dataTypes) => {
const Book = sequelize.define('Book', {
    id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: dataTypes.STRING,
         allowNull: false
    },
    author: {
        type: dataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: dataTypes.STRING
    },
    genre_id: {
        type: dataTypes.INTEGER,
        allowNull: false,
        references: { model: 'genres', key: 'id' }
    },
    rating: {
        type: dataTypes.DECIMAL,
        allowNull: true
    },
    image: {
        type: dataTypes.STRING
    },
    createdAt: {
        type: dataTypes.DATE,
        allowNull: false        
    },
    updatedAt: {
        type: dataTypes.DATE,
        allowNull: false        
    }
 
}, {
    tableName: 'books'
})

Book.associate = function(models) {
    Book.belongsTo(models.Genre, {
        foreignKey: 'genre_id,',
        as: 'genres'
    })
}
    return Book;
}

