[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / IssuableInventorySearchReq

# Class: IssuableInventorySearchReq

Describes the message that consists of parameters that are required to retrieve issuable inventory

**`Generated`**

from message Scailo.IssuableInventorySearchReq

## Hierarchy

- `Message`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\>

  ↳ **`IssuableInventorySearchReq`**

## Table of contents

### Constructors

- [constructor](IssuableInventorySearchReq.md#constructor)

### Properties

- [familyId](IssuableInventorySearchReq.md#familyid)
- [locationId](IssuableInventorySearchReq.md#locationid)
- [searchKey](IssuableInventorySearchReq.md#searchkey)
- [status](IssuableInventorySearchReq.md#status)
- [fields](IssuableInventorySearchReq.md#fields)
- [runtime](IssuableInventorySearchReq.md#runtime)
- [typeName](IssuableInventorySearchReq.md#typename)

### Methods

- [clone](IssuableInventorySearchReq.md#clone)
- [equals](IssuableInventorySearchReq.md#equals)
- [fromBinary](IssuableInventorySearchReq.md#frombinary)
- [fromJson](IssuableInventorySearchReq.md#fromjson)
- [fromJsonString](IssuableInventorySearchReq.md#fromjsonstring)
- [getType](IssuableInventorySearchReq.md#gettype)
- [toBinary](IssuableInventorySearchReq.md#tobinary)
- [toJSON](IssuableInventorySearchReq.md#tojson)
- [toJson](IssuableInventorySearchReq.md#tojson-1)
- [toJsonString](IssuableInventorySearchReq.md#tojsonstring)
- [equals](IssuableInventorySearchReq.md#equals-1)
- [fromBinary](IssuableInventorySearchReq.md#frombinary-1)
- [fromJson](IssuableInventorySearchReq.md#fromjson-1)
- [fromJsonString](IssuableInventorySearchReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new IssuableInventorySearchReq**(`data?`): [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\> |

#### Returns

[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Overrides

Message\&lt;IssuableInventorySearchReq\&gt;.constructor

#### Defined in

src/inventory.scailo_pb.ts:519

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the ID of the family that needs to be retrieved

**`Generated`**

from field: uint64 family_id = 10;

#### Defined in

src/inventory.scailo_pb.ts:510

___

### locationId

• **locationId**: `bigint` = `protoInt64.zero`

Stores the ID of the location from where the inventory needs to be retrieved

**`Generated`**

from field: uint64 location_id = 15;

#### Defined in

src/inventory.scailo_pb.ts:517

___

### searchKey

• **searchKey**: `string` = `""`

Stores the search key

**`Generated`**

from field: string search_key = 5;

#### Defined in

src/inventory.scailo_pb.ts:503

___

### status

• **status**: [`INVENTORY_LIFECYCLE`](../enums/INVENTORY_LIFECYCLE.md) = `INVENTORY_LIFECYCLE.INVENTORY_LIFECYCLE_ANY_UNSPECIFIED`

Stores the status of the inventory

**`Generated`**

from field: Scailo.INVENTORY_LIFECYCLE status = 1;

#### Defined in

src/inventory.scailo_pb.ts:496

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/inventory.scailo_pb.ts:526

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/inventory.scailo_pb.ts:524

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.IssuableInventorySearchReq"``

#### Defined in

src/inventory.scailo_pb.ts:525

## Methods

### clone

▸ **clone**(): [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

Create a deep copy.

#### Returns

[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

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
| `other` | `undefined` \| ``null`` \| [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md) \| `PlainMessage`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\>

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
| `a` | `undefined` \| [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md) \| `PlainMessage`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\> |
| `b` | `undefined` \| [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md) \| `PlainMessage`\<[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/inventory.scailo_pb.ts:545

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:533

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:537

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`IssuableInventorySearchReq`](IssuableInventorySearchReq.md)

#### Defined in

src/inventory.scailo_pb.ts:541
