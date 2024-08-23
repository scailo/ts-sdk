[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / OutwardJobsServiceInwardItemUpdateRequest

# Class: OutwardJobsServiceInwardItemUpdateRequest

Describes the parameters required to update an inward item in a outward job

**`Generated`**

from message Scailo.OutwardJobsServiceInwardItemUpdateRequest

## Hierarchy

- `Message`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\>

  ↳ **`OutwardJobsServiceInwardItemUpdateRequest`**

## Table of contents

### Constructors

- [constructor](OutwardJobsServiceInwardItemUpdateRequest.md#constructor)

### Properties

- [deliveryDate](OutwardJobsServiceInwardItemUpdateRequest.md#deliverydate)
- [id](OutwardJobsServiceInwardItemUpdateRequest.md#id)
- [internalQuantity](OutwardJobsServiceInwardItemUpdateRequest.md#internalquantity)
- [specifications](OutwardJobsServiceInwardItemUpdateRequest.md#specifications)
- [userComment](OutwardJobsServiceInwardItemUpdateRequest.md#usercomment)
- [fields](OutwardJobsServiceInwardItemUpdateRequest.md#fields)
- [runtime](OutwardJobsServiceInwardItemUpdateRequest.md#runtime)
- [typeName](OutwardJobsServiceInwardItemUpdateRequest.md#typename)

### Methods

- [clone](OutwardJobsServiceInwardItemUpdateRequest.md#clone)
- [equals](OutwardJobsServiceInwardItemUpdateRequest.md#equals)
- [fromBinary](OutwardJobsServiceInwardItemUpdateRequest.md#frombinary)
- [fromJson](OutwardJobsServiceInwardItemUpdateRequest.md#fromjson)
- [fromJsonString](OutwardJobsServiceInwardItemUpdateRequest.md#fromjsonstring)
- [getType](OutwardJobsServiceInwardItemUpdateRequest.md#gettype)
- [toBinary](OutwardJobsServiceInwardItemUpdateRequest.md#tobinary)
- [toJSON](OutwardJobsServiceInwardItemUpdateRequest.md#tojson)
- [toJson](OutwardJobsServiceInwardItemUpdateRequest.md#tojson-1)
- [toJsonString](OutwardJobsServiceInwardItemUpdateRequest.md#tojsonstring)
- [equals](OutwardJobsServiceInwardItemUpdateRequest.md#equals-1)
- [fromBinary](OutwardJobsServiceInwardItemUpdateRequest.md#frombinary-1)
- [fromJson](OutwardJobsServiceInwardItemUpdateRequest.md#fromjson-1)
- [fromJsonString](OutwardJobsServiceInwardItemUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new OutwardJobsServiceInwardItemUpdateRequest**(`data?`): [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\> |

#### Returns

[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Overrides

Message\&lt;OutwardJobsServiceInwardItemUpdateRequest\&gt;.constructor

#### Defined in

src/outward_jobs.scailo_pb.ts:986

## Properties

### deliveryDate

• **deliveryDate**: `string` = `""`

The delivery date of the item

**`Generated`**

from field: string delivery_date = 13;

#### Defined in

src/outward_jobs.scailo_pb.ts:977

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/outward_jobs.scailo_pb.ts:963

___

### internalQuantity

• **internalQuantity**: `bigint` = `protoInt64.zero`

The quantity of the item

**`Generated`**

from field: uint64 internal_quantity = 12;

#### Defined in

src/outward_jobs.scailo_pb.ts:970

___

### specifications

• **specifications**: `string` = `""`

Any extra specifications with regards to the item

**`Generated`**

from field: string specifications = 14;

#### Defined in

src/outward_jobs.scailo_pb.ts:984

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/outward_jobs.scailo_pb.ts:956

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/outward_jobs.scailo_pb.ts:993

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/outward_jobs.scailo_pb.ts:991

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.OutwardJobsServiceInwardItemUpdateRequest"``

#### Defined in

src/outward_jobs.scailo_pb.ts:992

## Methods

### clone

▸ **clone**(): [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

Create a deep copy.

#### Returns

[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\>

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
| `a` | `undefined` \| [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\> |
| `b` | `undefined` \| [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md) \| `PlainMessage`\<[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/outward_jobs.scailo_pb.ts:1013

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1001

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1005

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`OutwardJobsServiceInwardItemUpdateRequest`](OutwardJobsServiceInwardItemUpdateRequest.md)

#### Defined in

src/outward_jobs.scailo_pb.ts:1009
