[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / EquipmentsServiceCreateRequest

# Class: EquipmentsServiceCreateRequest

Describes the parameters necessary to create a record

**`Generated`**

from message Scailo.EquipmentsServiceCreateRequest

## Hierarchy

- `Message`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\>

  ↳ **`EquipmentsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](EquipmentsServiceCreateRequest.md#constructor)

### Properties

- [description](EquipmentsServiceCreateRequest.md#description)
- [entityUuid](EquipmentsServiceCreateRequest.md#entityuuid)
- [familyId](EquipmentsServiceCreateRequest.md#familyid)
- [internalItemCode](EquipmentsServiceCreateRequest.md#internalitemcode)
- [locationId](EquipmentsServiceCreateRequest.md#locationid)
- [quantity](EquipmentsServiceCreateRequest.md#quantity)
- [refFrom](EquipmentsServiceCreateRequest.md#reffrom)
- [refId](EquipmentsServiceCreateRequest.md#refid)
- [secondaryQuantity](EquipmentsServiceCreateRequest.md#secondaryquantity)
- [secondaryUomId](EquipmentsServiceCreateRequest.md#secondaryuomid)
- [shelfLifeTimestamp](EquipmentsServiceCreateRequest.md#shelflifetimestamp)
- [userComment](EquipmentsServiceCreateRequest.md#usercomment)
- [vaultFolderId](EquipmentsServiceCreateRequest.md#vaultfolderid)
- [warrantyTimestamp](EquipmentsServiceCreateRequest.md#warrantytimestamp)
- [fields](EquipmentsServiceCreateRequest.md#fields)
- [runtime](EquipmentsServiceCreateRequest.md#runtime)
- [typeName](EquipmentsServiceCreateRequest.md#typename)

### Methods

- [clone](EquipmentsServiceCreateRequest.md#clone)
- [equals](EquipmentsServiceCreateRequest.md#equals)
- [fromBinary](EquipmentsServiceCreateRequest.md#frombinary)
- [fromJson](EquipmentsServiceCreateRequest.md#fromjson)
- [fromJsonString](EquipmentsServiceCreateRequest.md#fromjsonstring)
- [getType](EquipmentsServiceCreateRequest.md#gettype)
- [toBinary](EquipmentsServiceCreateRequest.md#tobinary)
- [toJSON](EquipmentsServiceCreateRequest.md#tojson)
- [toJson](EquipmentsServiceCreateRequest.md#tojson-1)
- [toJsonString](EquipmentsServiceCreateRequest.md#tojsonstring)
- [equals](EquipmentsServiceCreateRequest.md#equals-1)
- [fromBinary](EquipmentsServiceCreateRequest.md#frombinary-1)
- [fromJson](EquipmentsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](EquipmentsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new EquipmentsServiceCreateRequest**(`data?`): [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\> |

#### Returns

[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Overrides

Message\&lt;EquipmentsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/equipments.scailo_pb.ts:158](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L158)

## Properties

### description

• **description**: `string` = `""`

The description of the equipment

**`Generated`**

from field: string description = 60;

#### Defined in

[src/equipments.scailo_pb.ts:156](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L156)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/equipments.scailo_pb.ts:65](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L65)

___

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the associated family

**`Generated`**

from field: uint64 family_id = 33;

#### Defined in

[src/equipments.scailo_pb.ts:100](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L100)

___

### internalItemCode

• **internalItemCode**: `string` = `""`

Stores the internal code (as given by user)

**`Generated`**

from field: string internal_item_code = 35;

#### Defined in

[src/equipments.scailo_pb.ts:107](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L107)

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

The location ID of where the item needs to be stored

**`Generated`**

from field: uint64 location_id = 54;

#### Defined in

[src/equipments.scailo_pb.ts:149](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L149)

___

### quantity

• **quantity**: `bigint` = `protoInt64.zero`

Stores the quantity (in cents)

**`Generated`**

from field: uint64 quantity = 37;

#### Defined in

[src/equipments.scailo_pb.ts:114](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L114)

___

### refFrom

• **refFrom**: [`EQUIPMENT_REF_FROM`](../enums/EQUIPMENT_REF_FROM.md) = `EQUIPMENT_REF_FROM.EQUIPMENT_REF_FROM_ANY_UNSPECIFIED`

Stores the reference from

**`Generated`**

from field: Scailo.EQUIPMENT_REF_FROM ref_from = 31;

#### Defined in

[src/equipments.scailo_pb.ts:86](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L86)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

Stores the ID of the reference

**`Generated`**

from field: uint64 ref_id = 32;

#### Defined in

[src/equipments.scailo_pb.ts:93](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L93)

___

### secondaryQuantity

• **secondaryQuantity**: `bigint` = `protoInt64.zero`

Stores an optional quantity in the secondary unit of equipment

**`Generated`**

from field: uint64 secondary_quantity = 40;

#### Defined in

[src/equipments.scailo_pb.ts:128](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L128)

___

### secondaryUomId

• **secondaryUomId**: `bigint` = `protoInt64.zero`

Stores an optional secondary unit of equipment

**`Generated`**

from field: uint64 secondary_uom_id = 39;

#### Defined in

[src/equipments.scailo_pb.ts:121](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L121)

___

### shelfLifeTimestamp

• **shelfLifeTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional shelf life as a timestamp

**`Generated`**

from field: uint64 shelf_life_timestamp = 41;

#### Defined in

[src/equipments.scailo_pb.ts:135](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L135)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/equipments.scailo_pb.ts:72](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L72)

___

### vaultFolderId

• **vaultFolderId**: `bigint` = `protoInt64.zero`

The associated vault folder ID

**`Generated`**

from field: uint64 vault_folder_id = 18;

#### Defined in

[src/equipments.scailo_pb.ts:79](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L79)

___

### warrantyTimestamp

• **warrantyTimestamp**: `bigint` = `protoInt64.zero`

Stores an optional warranty as a timestamp

**`Generated`**

from field: uint64 warranty_timestamp = 42;

#### Defined in

[src/equipments.scailo_pb.ts:142](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L142)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/equipments.scailo_pb.ts:165](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L165)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/equipments.scailo_pb.ts:163](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L163)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.EquipmentsServiceCreateRequest"``

#### Defined in

[src/equipments.scailo_pb.ts:164](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L164)

## Methods

### clone

▸ **clone**(): [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md) \| `PlainMessage`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md) \| `PlainMessage`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md) \| `PlainMessage`\<[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/equipments.scailo_pb.ts:194](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L194)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Defined in

[src/equipments.scailo_pb.ts:182](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L182)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Defined in

[src/equipments.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L186)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`EquipmentsServiceCreateRequest`](EquipmentsServiceCreateRequest.md)

#### Defined in

[src/equipments.scailo_pb.ts:190](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/equipments.scailo_pb.ts#L190)
