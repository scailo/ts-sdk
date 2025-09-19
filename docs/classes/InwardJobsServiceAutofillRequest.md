[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / InwardJobsServiceAutofillRequest

# Class: InwardJobsServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.InwardJobsServiceAutofillRequest

## Hierarchy

- `Message`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\>

  ↳ **`InwardJobsServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](InwardJobsServiceAutofillRequest.md#constructor)

### Properties

- [userComment](InwardJobsServiceAutofillRequest.md#usercomment)
- [uuid](InwardJobsServiceAutofillRequest.md#uuid)
- [fields](InwardJobsServiceAutofillRequest.md#fields)
- [runtime](InwardJobsServiceAutofillRequest.md#runtime)
- [typeName](InwardJobsServiceAutofillRequest.md#typename)

### Methods

- [clone](InwardJobsServiceAutofillRequest.md#clone)
- [equals](InwardJobsServiceAutofillRequest.md#equals)
- [fromBinary](InwardJobsServiceAutofillRequest.md#frombinary)
- [fromJson](InwardJobsServiceAutofillRequest.md#fromjson)
- [fromJsonString](InwardJobsServiceAutofillRequest.md#fromjsonstring)
- [getType](InwardJobsServiceAutofillRequest.md#gettype)
- [toBinary](InwardJobsServiceAutofillRequest.md#tobinary)
- [toJSON](InwardJobsServiceAutofillRequest.md#tojson)
- [toJson](InwardJobsServiceAutofillRequest.md#tojson-1)
- [toJsonString](InwardJobsServiceAutofillRequest.md#tojsonstring)
- [equals](InwardJobsServiceAutofillRequest.md#equals-1)
- [fromBinary](InwardJobsServiceAutofillRequest.md#frombinary-1)
- [fromJson](InwardJobsServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](InwardJobsServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new InwardJobsServiceAutofillRequest**(`data?`): [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\> |

#### Returns

[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Overrides

Message\&lt;InwardJobsServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/inward_jobs.scailo_pb.ts:635](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L635)

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/inward_jobs.scailo_pb.ts:626](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L626)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/inward_jobs.scailo_pb.ts:633](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L633)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/inward_jobs.scailo_pb.ts:642](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L642)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/inward_jobs.scailo_pb.ts:640](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L640)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.InwardJobsServiceAutofillRequest"``

#### Defined in

[src/inward_jobs.scailo_pb.ts:641](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L641)

## Methods

### clone

▸ **clone**(): [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md) \| `PlainMessage`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md) \| `PlainMessage`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md) \| `PlainMessage`\<[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/inward_jobs.scailo_pb.ts:659](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L659)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:647](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L647)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:651](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L651)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`InwardJobsServiceAutofillRequest`](InwardJobsServiceAutofillRequest.md)

#### Defined in

[src/inward_jobs.scailo_pb.ts:655](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/inward_jobs.scailo_pb.ts#L655)
