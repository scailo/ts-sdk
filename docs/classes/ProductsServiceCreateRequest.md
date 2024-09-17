[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ProductsServiceCreateRequest

# Class: ProductsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.ProductsServiceCreateRequest

## Hierarchy

- `Message`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\>

  ↳ **`ProductsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](ProductsServiceCreateRequest.md#constructor)

### Properties

- [description](ProductsServiceCreateRequest.md#description)
- [entityUuid](ProductsServiceCreateRequest.md#entityuuid)
- [familyId](ProductsServiceCreateRequest.md#familyid)
- [internalItemCode](ProductsServiceCreateRequest.md#internalitemcode)
- [locationId](ProductsServiceCreateRequest.md#locationid)
- [quantity](ProductsServiceCreateRequest.md#quantity)
- [refFrom](ProductsServiceCreateRequest.md#reffrom)
- [refId](ProductsServiceCreateRequest.md#refid)
- [secondaryQuantity](ProductsServiceCreateRequest.md#secondaryquantity)
- [secondaryUomId](ProductsServiceCreateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](ProductsServiceCreateRequest.md#shelflifetimestamp)
- [userComment](ProductsServiceCreateRequest.md#usercomment)
- [vaultFolderId](ProductsServiceCreateRequest.md#vaultfolderid)
- [warrantyTimestamp](ProductsServiceCreateRequest.md#warrantytimestamp)
- [fields](ProductsServiceCreateRequest.md#fields)
- [runtime](ProductsServiceCreateRequest.md#runtime)
- [typeName](ProductsServiceCreateRequest.md#typename)

### Methods

- [clone](ProductsServiceCreateRequest.md#clone)
- [equals](ProductsServiceCreateRequest.md#equals)
- [fromBinary](ProductsServiceCreateRequest.md#frombinary)
- [fromJson](ProductsServiceCreateRequest.md#fromjson)
- [fromJsonString](ProductsServiceCreateRequest.md#fromjsonstring)
- [getType](ProductsServiceCreateRequest.md#gettype)
- [toBinary](ProductsServiceCreateRequest.md#tobinary)
- [toJSON](ProductsServiceCreateRequest.md#tojson)
- [toJson](ProductsServiceCreateRequest.md#tojson-1)
- [toJsonString](ProductsServiceCreateRequest.md#tojsonstring)
- [equals](ProductsServiceCreateRequest.md#equals-1)
- [fromBinary](ProductsServiceCreateRequest.md#frombinary-1)
- [fromJson](ProductsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](ProductsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ProductsServiceCreateRequest**(`data?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Overrides

Message\&lt;ProductsServiceCreateRequest\&gt;.constructor

#### Defined in

src/products.scailo_pb.ts:150

## Properties

### description

• **description**: `string` = `""`

The description of the product

**`Generated`**

from field: string description = 60;

#### Defined in

src/products.scailo_pb.ts:148

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/products.scailo_pb.ts:57

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/products.scailo_pb.ts:92

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/products.scailo_pb.ts:99

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

src/products.scailo_pb.ts:141

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

src/products.scailo_pb.ts:106

___

### refFrom

• **refFrom**: [`PRODUCT_REF_FROM`](../enums/PRODUCT_REF_FROM.md) = `PRODUCT_REF_FROM.PRODUCT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.PRODUCT_REF_FROM ref_from = 31;

#### Defined in

src/products.scailo_pb.ts:78

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/products.scailo_pb.ts:85

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of product

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

src/products.scailo_pb.ts:120

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of product

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

src/products.scailo_pb.ts:113

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

src/products.scailo_pb.ts:127

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/products.scailo_pb.ts:64

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

src/products.scailo_pb.ts:71

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

src/products.scailo_pb.ts:134

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/products.scailo_pb.ts:157

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/products.scailo_pb.ts:155

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ProductsServiceCreateRequest"``

#### Defined in

src/products.scailo_pb.ts:156

## Methods

### clone

▸ **clone**(): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Inherited from

Message.clone

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:28

___

### equals

▸ **equals**(`other`): `boolean`

Compare with a message of the same type.
Note that this function disregards extensions and unknown fields.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `undefined` \| ``null`` \| [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md) \| `PlainMessage`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Inherited from

Message.equals

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:24

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): `this`

Parse from binary data, merging fields.

Repeated fields are appended. Map entries are added, overwriting
existing keys.

If a message field is already present, it will be merged with the
new data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:38

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): `this`

Parse a message from a JSON value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:42

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): `this`

Parse a message from a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`this`

#### Inherited from

Message.fromJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:46

___

### getType

▸ **getType**(): `MessageType`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\>

#### Inherited from

Message.getType

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:81

___

### toBinary

▸ **toBinary**(`options?`): `Uint8Array`

Serialize the message to binary data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`BinaryWriteOptions`\> |

#### Returns

`Uint8Array`

#### Inherited from

Message.toBinary

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:50

___

### toJSON

▸ **toJSON**(): `JsonValue`

Override for serialization behavior. This will be invoked when calling
JSON.stringify on this message (i.e. JSON.stringify(msg)).

Note that this will not serialize google.protobuf.Any with a packed
message because the protobuf JSON format specifies that it needs to be
unpacked, and this is only possible with a type registry to look up the
message type.  As a result, attempting to serialize a message with this
type will throw an Error.

This method is protected because you should not need to invoke it
directly -- instead use JSON.stringify or toJsonString for
stringified JSON.  Alternatively, if actual JSON is desired, you should
use toJson.

#### Returns

`JsonValue`

#### Inherited from

Message.toJSON

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:75

___

### toJson

▸ **toJson**(`options?`): `JsonValue`

Serialize the message to a JSON value, a JavaScript value that can be
passed to JSON.stringify().

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteOptions`\> |

#### Returns

`JsonValue`

#### Inherited from

Message.toJson

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:55

___

### toJsonString

▸ **toJsonString**(`options?`): `string`

Serialize the message to a JSON string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Partial`\<`JsonWriteStringOptions`\> |

#### Returns

`string`

#### Inherited from

Message.toJsonString

#### Defined in

node_modules/@bufbuild/protobuf/dist/cjs/message.d.ts:59

___

### equals

▸ **equals**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `undefined` \| [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md) \| `PlainMessage`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md) \| `PlainMessage`\<[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/products.scailo_pb.ts:186

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Defined in

src/products.scailo_pb.ts:174

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Defined in

src/products.scailo_pb.ts:178

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ProductsServiceCreateRequest`](ProductsServiceCreateRequest.md)

#### Defined in

src/products.scailo_pb.ts:182
