[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceMultipleOutwardItemsSingleton

# Class: OutwardJobsServiceMultipleOutwardItemsSingleton

Describes the parameters required to add an individual item as part of multiple item addition to a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceMultipleOutwardItemsSingleton

## Hierarchy

- `Message`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\>

  ↳ **`OutwardJobsServiceMultipleOutwardItemsSingleton`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceMultipleOutwardItemsSingleton.md#constructor)

### Properties

- [familyId](OutwardJobsServiceMultipleOutwardItemsSingleton.md#familyid)
- [internalQuantity](OutwardJobsServiceMultipleOutwardItemsSingleton.md#internalquantity)
- [itemHash](OutwardJobsServiceMultipleOutwardItemsSingleton.md#itemhash)
- [specifications](OutwardJobsServiceMultipleOutwardItemsSingleton.md#specifications)
- [fields](OutwardJobsServiceMultipleOutwardItemsSingleton.md#fields)
- [runtime](OutwardJobsServiceMultipleOutwardItemsSingleton.md#runtime)
- [typeName](OutwardJobsServiceMultipleOutwardItemsSingleton.md#typename)

### Methods

- [clone](OutwardJobsServiceMultipleOutwardItemsSingleton.md#clone)
- [equals](OutwardJobsServiceMultipleOutwardItemsSingleton.md#equals)
- [fromBinary](OutwardJobsServiceMultipleOutwardItemsSingleton.md#frombinary)
- [fromJson](OutwardJobsServiceMultipleOutwardItemsSingleton.md#fromjson)
- [fromJsonString](OutwardJobsServiceMultipleOutwardItemsSingleton.md#fromjsonstring)
- [getType](OutwardJobsServiceMultipleOutwardItemsSingleton.md#gettype)
- [toBinary](OutwardJobsServiceMultipleOutwardItemsSingleton.md#tobinary)
- [toJSON](OutwardJobsServiceMultipleOutwardItemsSingleton.md#tojson)
- [toJson](OutwardJobsServiceMultipleOutwardItemsSingleton.md#tojson-1)
- [toJsonString](OutwardJobsServiceMultipleOutwardItemsSingleton.md#tojsonstring)
- [equals](OutwardJobsServiceMultipleOutwardItemsSingleton.md#equals-1)
- [fromBinary](OutwardJobsServiceMultipleOutwardItemsSingleton.md#frombinary-1)
- [fromJson](OutwardJobsServiceMultipleOutwardItemsSingleton.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceMultipleOutwardItemsSingleton.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceMultipleOutwardItemsSingleton**(`data?`): [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Overrides

Message\&lt;OutwardJobsServiceMultipleOutwardItemsSingleton\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2391

## Properties

### familyId

• **familyId**: `bigint` = `protoInt64.zero`

Stores the family ID

**`Generated`**

from field: uint64 family_id = 11;

#### Defined in

src/outward_jobs.scailo_pb.ts:2368

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:2382

___

### itemHash

• **itemHash**: `string` = `""`

Stores the optional item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:2375

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:2389

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2398

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2396

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceMultipleOutwardItemsSingleton"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2397

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md) \| `PlainMessage`\<[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2417

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2405

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2409

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceMultipleOutwardItemsSingleton`](OutwardJobsServiceMultipleOutwardItemsSingleton.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2413
