[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceOwnerCreateRequest

# Class: ActivitiesServiceOwnerCreateRequest

Describes the parameters necessary to create an activity owner

**`Generated`**

from message Scailo.ActivitiesServiceOwnerCreateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\>

  ↳ **`ActivitiesServiceOwnerCreateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceOwnerCreateRequest.md#constructor)

### Properties

- [activityId](ActivitiesServiceOwnerCreateRequest.md#activityid)
- [employeeId](ActivitiesServiceOwnerCreateRequest.md#employeeid)
- [userComment](ActivitiesServiceOwnerCreateRequest.md#usercomment)
- [fields](ActivitiesServiceOwnerCreateRequest.md#fields)
- [runtime](ActivitiesServiceOwnerCreateRequest.md#runtime)
- [typeName](ActivitiesServiceOwnerCreateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceOwnerCreateRequest.md#clone)
- [equals](ActivitiesServiceOwnerCreateRequest.md#equals)
- [fromBinary](ActivitiesServiceOwnerCreateRequest.md#frombinary)
- [fromJson](ActivitiesServiceOwnerCreateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceOwnerCreateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceOwnerCreateRequest.md#gettype)
- [toBinary](ActivitiesServiceOwnerCreateRequest.md#tobinary)
- [toJSON](ActivitiesServiceOwnerCreateRequest.md#tojson)
- [toJson](ActivitiesServiceOwnerCreateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceOwnerCreateRequest.md#tojsonstring)
- [equals](ActivitiesServiceOwnerCreateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceOwnerCreateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceOwnerCreateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceOwnerCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceOwnerCreateRequest**(`data?`): [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\> |

#### Returns

[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceOwnerCreateRequest\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:2577](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2577)

## Properties

### activityId

• **activityId**: `bigint` = `protoInt64.zero`

Stores the activity ID

**`Generated`**

from field: uint64 activity_id = 10;

#### Defined in

[src/activities.scailo_pb.ts:2568](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2568)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the employee ID

**`Generated`**

from field: uint64 employee_id = 11;

#### Defined in

[src/activities.scailo_pb.ts:2575](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2575)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/activities.scailo_pb.ts:2561](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2561)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:2584](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2584)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:2582](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2582)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceOwnerCreateRequest"``

#### Defined in

[src/activities.scailo_pb.ts:2583](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2583)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:2602](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2602)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:2590](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2590)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:2594](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2594)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceOwnerCreateRequest`](ActivitiesServiceOwnerCreateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:2598](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L2598)
