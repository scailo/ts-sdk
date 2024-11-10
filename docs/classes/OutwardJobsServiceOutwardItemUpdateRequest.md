[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceOutwardItemUpdateRequest

# Class: OutwardJobsServiceOutwardItemUpdateRequest

Describes the parameters required to update an outward item in a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceOutwardItemUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\>

  ↳ **`OutwardJobsServiceOutwardItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceOutwardItemUpdateRequest.md#constructor)

### Properties

- [id](OutwardJobsServiceOutwardItemUpdateRequest.md#id)
- [internalQuantity](OutwardJobsServiceOutwardItemUpdateRequest.md#internalquantity)
- [itemHash](OutwardJobsServiceOutwardItemUpdateRequest.md#itemhash)
- [specifications](OutwardJobsServiceOutwardItemUpdateRequest.md#specifications)
- [userComment](OutwardJobsServiceOutwardItemUpdateRequest.md#usercomment)
- [fields](OutwardJobsServiceOutwardItemUpdateRequest.md#fields)
- [runtime](OutwardJobsServiceOutwardItemUpdateRequest.md#runtime)
- [typeName](OutwardJobsServiceOutwardItemUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceOutwardItemUpdateRequest.md#clone)
- [equals](OutwardJobsServiceOutwardItemUpdateRequest.md#equals)
- [fromBinary](OutwardJobsServiceOutwardItemUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceOutwardItemUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceOutwardItemUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceOutwardItemUpdateRequest.md#gettype)
- [toBinary](OutwardJobsServiceOutwardItemUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceOutwardItemUpdateRequest.md#tojson)
- [toJson](OutwardJobsServiceOutwardItemUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceOutwardItemUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceOutwardItemUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceOutwardItemUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceOutwardItemUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceOutwardItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceOutwardItemUpdateRequest**(`data?`): [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\> |

#### Returns

[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceOutwardItemUpdateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:2591

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:2568

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:2582

___

### itemHash

• **itemHash**: `string` = `""`

Stores the optional item hash to be dispatched

**`Generated`**

from field: string item_hash = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:2575

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:2589

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:2561

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:2598

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:2596

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceOutwardItemUpdateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:2597

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:2618

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2606

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2610

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceOutwardItemUpdateRequest`](OutwardJobsServiceOutwardItemUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:2614
