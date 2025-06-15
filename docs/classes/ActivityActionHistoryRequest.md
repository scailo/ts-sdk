[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivityActionHistoryRequest

# Class: ActivityActionHistoryRequest

Describes the parameters that are required to retrieve the history of the record

**`Generated`**

from message Scailo.ActivityActionHistoryRequest

## Hierarchy

- `Message`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\>

  ↳ **`ActivityActionHistoryRequest`**

## Table of contents

### Constructors

- [constructor](ActivityActionHistoryRequest.md#constructor)

### Properties

- [actionCodeId](ActivityActionHistoryRequest.md#actioncodeid)
- [activityId](ActivityActionHistoryRequest.md#activityid)
- [fields](ActivityActionHistoryRequest.md#fields)
- [runtime](ActivityActionHistoryRequest.md#runtime)
- [typeName](ActivityActionHistoryRequest.md#typename)

### Methods

- [clone](ActivityActionHistoryRequest.md#clone)
- [equals](ActivityActionHistoryRequest.md#equals)
- [fromBinary](ActivityActionHistoryRequest.md#frombinary)
- [fromJson](ActivityActionHistoryRequest.md#fromjson)
- [fromJsonString](ActivityActionHistoryRequest.md#fromjsonstring)
- [getType](ActivityActionHistoryRequest.md#gettype)
- [toBinary](ActivityActionHistoryRequest.md#tobinary)
- [toJSON](ActivityActionHistoryRequest.md#tojson)
- [toJson](ActivityActionHistoryRequest.md#tojson-1)
- [toJsonString](ActivityActionHistoryRequest.md#tojsonstring)
- [equals](ActivityActionHistoryRequest.md#equals-1)
- [fromBinary](ActivityActionHistoryRequest.md#frombinary-1)
- [fromJson](ActivityActionHistoryRequest.md#fromjson-1)
- [fromJsonString](ActivityActionHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivityActionHistoryRequest**(`data?`): [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\> |

#### Returns

[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Overrides

Message\&lt;ActivityActionHistoryRequest\&gt;.constructor

#### Defined in

src/activities.scailo_pb.ts:2044

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 13;

#### Defined in

src/activities.scailo_pb.ts:2042

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

src/activities.scailo_pb.ts:2035

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/activities.scailo_pb.ts:2051

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/activities.scailo_pb.ts:2049

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivityActionHistoryRequest"``

#### Defined in

src/activities.scailo_pb.ts:2050

## Methods

### clone

▸ **clone**(): [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

Create a deep copy.

#### Returns

[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md) \| `PlainMessage`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\>

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
| `a` | `undefined` \| [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md) \| `PlainMessage`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\> |
| `b` | `undefined` \| [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md) \| `PlainMessage`\<[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/activities.scailo_pb.ts:2068

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2056

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2060

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivityActionHistoryRequest`](ActivityActionHistoryRequest.md)

#### Defined in

src/activities.scailo_pb.ts:2064
