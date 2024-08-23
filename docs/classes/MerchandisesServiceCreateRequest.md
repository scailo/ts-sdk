[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / MerchandisesServiceCreateRequest

# Class: MerchandisesServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.MerchandisesServiceCreateRequest

## Hierarchy

- `Message`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\>

  ↳ **`MerchandisesServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](MerchandisesServiceCreateRequest.md#constructor)

### Properties

- [description](MerchandisesServiceCreateRequest.md#description)
- [entityUuid](MerchandisesServiceCreateRequest.md#entityuuid)
- [familyId](MerchandisesServiceCreateRequest.md#familyid)
- [internalItemCode](MerchandisesServiceCreateRequest.md#internalitemcode)
- [locationId](MerchandisesServiceCreateRequest.md#locationid)
- [quantity](MerchandisesServiceCreateRequest.md#quantity)
- [refFrom](MerchandisesServiceCreateRequest.md#reffrom)
- [refId](MerchandisesServiceCreateRequest.md#refid)
- [secondaryQuantity](MerchandisesServiceCreateRequest.md#secondaryquantity)
- [secondaryUomId](MerchandisesServiceCreateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](MerchandisesServiceCreateRequest.md#shelflifetimestamp)
- [userComment](MerchandisesServiceCreateRequest.md#usercomment)
- [vaultFolderId](MerchandisesServiceCreateRequest.md#vaultfolderid)
- [warrantyTimestamp](MerchandisesServiceCreateRequest.md#warrantytimestamp)
- [fields](MerchandisesServiceCreateRequest.md#fields)
- [runtime](MerchandisesServiceCreateRequest.md#runtime)
- [typeName](MerchandisesServiceCreateRequest.md#typename)

### Methods

- [clone](MerchandisesServiceCreateRequest.md#clone)
- [equals](MerchandisesServiceCreateRequest.md#equals)
- [fromBinary](MerchandisesServiceCreateRequest.md#frombinary)
- [fromJson](MerchandisesServiceCreateRequest.md#fromjson)
- [fromJsonString](MerchandisesServiceCreateRequest.md#fromjsonstring)
- [getType](MerchandisesServiceCreateRequest.md#gettype)
- [toBinary](MerchandisesServiceCreateRequest.md#tobinary)
- [toJSON](MerchandisesServiceCreateRequest.md#tojson)
- [toJson](MerchandisesServiceCreateRequest.md#tojson-1)
- [toJsonString](MerchandisesServiceCreateRequest.md#tojsonstring)
- [equals](MerchandisesServiceCreateRequest.md#equals-1)
- [fromBinary](MerchandisesServiceCreateRequest.md#frombinary-1)
- [fromJson](MerchandisesServiceCreateRequest.md#fromjson-1)
- [fromJsonString](MerchandisesServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new MerchandisesServiceCreateRequest**(`data?`): [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\> |

#### Returns

[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Overrides

Message\&lt;MerchandisesServiceCreateRequest\&gt;.constructor

#### Defined in

src/merchandises.scailo_pb.ts:158

## Properties

### description

• **description**: `string` = `""`

The description of the merchandise

**`Generated`**

from field: string description = 60;

#### Defined in

src/merchandises.scailo_pb.ts:156

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/merchandises.scailo_pb.ts:65

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

src/merchandises.scailo_pb.ts:100

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

src/merchandises.scailo_pb.ts:107

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

src/merchandises.scailo_pb.ts:149

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

src/merchandises.scailo_pb.ts:114

___

### refFrom

• **refFrom**: [`MERCHANDISE_REF_FROM`](../enums/MERCHANDISE_REF_FROM.md) = `MERCHANDISE_REF_FROM.MERCHANDISE_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.MERCHANDISE_REF_FROM ref_from = 31;

#### Defined in

src/merchandises.scailo_pb.ts:86

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

src/merchandises.scailo_pb.ts:93

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of merchandise

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

src/merchandises.scailo_pb.ts:128

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of merchandise

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

src/merchandises.scailo_pb.ts:121

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

src/merchandises.scailo_pb.ts:135

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/merchandises.scailo_pb.ts:72

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

src/merchandises.scailo_pb.ts:79

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

src/merchandises.scailo_pb.ts:142

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/merchandises.scailo_pb.ts:165

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/merchandises.scailo_pb.ts:163

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.MerchandisesServiceCreateRequest"``

#### Defined in

src/merchandises.scailo_pb.ts:164

## Methods

### clone

▸ **clone**(): [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md) \| `PlainMessage`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md) \| `PlainMessage`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md) \| `PlainMessage`\<[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/merchandises.scailo_pb.ts:194

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Defined in

src/merchandises.scailo_pb.ts:182

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Defined in

src/merchandises.scailo_pb.ts:186

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`MerchandisesServiceCreateRequest`](MerchandisesServiceCreateRequest.md)

#### Defined in

src/merchandises.scailo_pb.ts:190
