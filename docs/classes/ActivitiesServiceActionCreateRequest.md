[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceActionCreateRequest

# Class: ActivitiesServiceActionCreateRequest

Describes the parameters required to add an action to an activity

**`Generated`**

from message Scailo.ActivitiesServiceActionCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\>

  ↳ **`ActivitiesServiceActionCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceActionCreateRequest.md#constructor)

### Properties

- [actionCodeId](ActivitiesServiceActionCreateRequest.md#actioncodeid)
- [activityId](ActivitiesServiceActionCreateRequest.md#activityid)
- [content](ActivitiesServiceActionCreateRequest.md#content)
- [employeeId](ActivitiesServiceActionCreateRequest.md#employeeid)
- [points](ActivitiesServiceActionCreateRequest.md#points)
- [title](ActivitiesServiceActionCreateRequest.md#title)
- [userComment](ActivitiesServiceActionCreateRequest.md#usercomment)
- [fields](ActivitiesServiceActionCreateRequest.md#fields)
- [runtime](ActivitiesServiceActionCreateRequest.md#runtime)
- [typeName](ActivitiesServiceActionCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceActionCreateRequest.md#clone)
- [equals](ActivitiesServiceActionCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceActionCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceActionCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceActionCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceActionCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceActionCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceActionCreateRequest.md#tojson)
- [toJson](ActivitiesServiceActionCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceActionCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceActionCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceActionCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceActionCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceActionCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceActionCreateRequest**(`data?`): [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceActionCreateRequest\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:1926](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1926)

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 13;

#### Defined in

[src/activities.scailo_pb.ts:1917](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1917)

___

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

[src/activities.scailo_pb.ts:1896](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1896)

___

### content

• **content**: `string` = `""`

The content of the action

**`Generated`**

from field: string content = 12;

#### Defined in

[src/activities.scailo_pb.ts:1910](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1910)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the optional employee ID

**`Generated`**

from field: uint64 employee_id = 9;

#### Defined in

[src/activities.scailo_pb.ts:1889](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1889)

___

### points

• **points**: `bigint` = `protoInt64.zero`

Stores the number of points assigned to this action (should be greater than 0)

**`Generated`**

from field: uint64 points = 14;

#### Defined in

[src/activities.scailo_pb.ts:1924](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1924)

___

### title

• **title**: `string` = `""`

The title of the action

**`Generated`**

from field: string title = 11;

#### Defined in

[src/activities.scailo_pb.ts:1903](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1903)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/activities.scailo_pb.ts:1882](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1882)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:1933](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1933)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:1931](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1931)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceActionCreateRequest"``

#### Defined in

[src/activities.scailo_pb.ts:1932](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1932)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:1955](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1955)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:1943](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1943)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:1947](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1947)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActionCreateRequest`](ActivitiesServiceActionCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:1951](https://github.com/scailo/ts-sdk/blob/461e4636e5d66d843a0d6b6725bd0f098efd513a/src/activities.scailo_pb.ts#L1951)
