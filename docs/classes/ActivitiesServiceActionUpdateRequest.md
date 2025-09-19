[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / ActivitiesServiceActionUpdateRequest

# Class: ActivitiesServiceActionUpdateRequest

Describes the parameters required to update an action in an activity

**`Generated`**

from message Scailo.ActivitiesServiceActionUpdateRequest

## Hierarchy

- `Message`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\>

  ↳ **`ActivitiesServiceActionUpdateRequest`**

## Table of contents

### Constructors

- [constructor](ActivitiesServiceActionUpdateRequest.md#constructor)

### Properties

- [actionCodeId](ActivitiesServiceActionUpdateRequest.md#actioncodeid)
- [content](ActivitiesServiceActionUpdateRequest.md#content)
- [employeeId](ActivitiesServiceActionUpdateRequest.md#employeeid)
- [id](ActivitiesServiceActionUpdateRequest.md#id)
- [points](ActivitiesServiceActionUpdateRequest.md#points)
- [title](ActivitiesServiceActionUpdateRequest.md#title)
- [userComment](ActivitiesServiceActionUpdateRequest.md#usercomment)
- [fields](ActivitiesServiceActionUpdateRequest.md#fields)
- [runtime](ActivitiesServiceActionUpdateRequest.md#runtime)
- [typeName](ActivitiesServiceActionUpdateRequest.md#typename)

### Methods

- [clone](ActivitiesServiceActionUpdateRequest.md#clone)
- [equals](ActivitiesServiceActionUpdateRequest.md#equals)
- [fromBinary](ActivitiesServiceActionUpdateRequest.md#frombinary)
- [fromJson](ActivitiesServiceActionUpdateRequest.md#fromjson)
- [fromJsonString](ActivitiesServiceActionUpdateRequest.md#fromjsonstring)
- [getType](ActivitiesServiceActionUpdateRequest.md#gettype)
- [toBinary](ActivitiesServiceActionUpdateRequest.md#tobinary)
- [toJSON](ActivitiesServiceActionUpdateRequest.md#tojson)
- [toJson](ActivitiesServiceActionUpdateRequest.md#tojson-1)
- [toJsonString](ActivitiesServiceActionUpdateRequest.md#tojsonstring)
- [equals](ActivitiesServiceActionUpdateRequest.md#equals-1)
- [fromBinary](ActivitiesServiceActionUpdateRequest.md#frombinary-1)
- [fromJson](ActivitiesServiceActionUpdateRequest.md#fromjson-1)
- [fromJsonString](ActivitiesServiceActionUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new ActivitiesServiceActionUpdateRequest**(`data?`): [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\> |

#### Returns

[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Overrides

Message\&lt;ActivitiesServiceActionUpdateRequest\&gt;.constructor

#### Defined in

[src/activities.scailo_pb.ts:1783](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1783)

## Properties

### actionCodeId

• **actionCodeId**: `bigint` = `protoInt64.zero`

Stores the action code ID

**`Generated`**

from field: uint64 action_code_id = 13;

#### Defined in

[src/activities.scailo_pb.ts:1774](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1774)

___

### content

• **content**: `string` = `""`

The content of the action

**`Generated`**

from field: string content = 12;

#### Defined in

[src/activities.scailo_pb.ts:1767](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1767)

___

### employeeId

• **employeeId**: `bigint` = `protoInt64.zero`

Stores the optional employee ID

**`Generated`**

from field: uint64 employee_id = 9;

#### Defined in

[src/activities.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1753)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/activities.scailo_pb.ts:1746](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1746)

___

### points

• **points**: `bigint` = `protoInt64.zero`

Stores the number of points assigned to this action (should be greater than 0)

**`Generated`**

from field: uint64 points = 14;

#### Defined in

[src/activities.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1781)

___

### title

• **title**: `string` = `""`

The title of the action

**`Generated`**

from field: string title = 11;

#### Defined in

[src/activities.scailo_pb.ts:1760](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1760)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/activities.scailo_pb.ts:1739](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1739)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/activities.scailo_pb.ts:1790](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1790)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/activities.scailo_pb.ts:1788](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1788)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.ActivitiesServiceActionUpdateRequest"``

#### Defined in

[src/activities.scailo_pb.ts:1789](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1789)

## Methods

### clone

▸ **clone**(): [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

Create a deep copy.

#### Returns

[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\>

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
| `a` | `undefined` \| [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\> |
| `b` | `undefined` \| [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md) \| `PlainMessage`\<[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/activities.scailo_pb.ts:1812](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1812)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:1800](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1800)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:1804](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1804)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`ActivitiesServiceActionUpdateRequest`](ActivitiesServiceActionUpdateRequest.md)

#### Defined in

[src/activities.scailo_pb.ts:1808](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/activities.scailo_pb.ts#L1808)
