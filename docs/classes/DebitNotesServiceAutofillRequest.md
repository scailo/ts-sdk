[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceAutofillRequest

# Class: DebitNotesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.DebitNotesServiceAutofillRequest

## Hierarchy

- `Message`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\>

  ↳ **`DebitNotesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceAutofillRequest.md#constructor)

### Properties

- [userComment](DebitNotesServiceAutofillRequest.md#usercomment)
- [uuid](DebitNotesServiceAutofillRequest.md#uuid)
- [fields](DebitNotesServiceAutofillRequest.md#fields)
- [runtime](DebitNotesServiceAutofillRequest.md#runtime)
- [typeName](DebitNotesServiceAutofillRequest.md#typename)

### Methods

- [clone](DebitNotesServiceAutofillRequest.md#clone)
- [equals](DebitNotesServiceAutofillRequest.md#equals)
- [fromBinary](DebitNotesServiceAutofillRequest.md#frombinary)
- [fromJson](DebitNotesServiceAutofillRequest.md#fromjson)
- [fromJsonString](DebitNotesServiceAutofillRequest.md#fromjsonstring)
- [getType](DebitNotesServiceAutofillRequest.md#gettype)
- [toBinary](DebitNotesServiceAutofillRequest.md#tobinary)
- [toJSON](DebitNotesServiceAutofillRequest.md#tojson)
- [toJson](DebitNotesServiceAutofillRequest.md#tojson-1)
- [toJsonString](DebitNotesServiceAutofillRequest.md#tojsonstring)
- [equals](DebitNotesServiceAutofillRequest.md#equals-1)
- [fromBinary](DebitNotesServiceAutofillRequest.md#frombinary-1)
- [fromJson](DebitNotesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](DebitNotesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceAutofillRequest**(`data?`): [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\> |

#### Returns

[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Overrides

Message\&lt;DebitNotesServiceAutofillRequest\&gt;.constructor

#### Defined in

[src/debit_notes.scailo_pb.ts:528](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L528)

## Properties

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/debit_notes.scailo_pb.ts:519](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L519)

___

### uuid

• **uuid**: `string` = `""`

The UUID of the record that needs to be updated

**`Generated`**

from field: string uuid = 2;

#### Defined in

[src/debit_notes.scailo_pb.ts:526](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L526)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/debit_notes.scailo_pb.ts:535](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L535)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/debit_notes.scailo_pb.ts:533](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L533)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceAutofillRequest"``

#### Defined in

[src/debit_notes.scailo_pb.ts:534](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L534)

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md) \| `PlainMessage`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md) \| `PlainMessage`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md) \| `PlainMessage`\<[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/debit_notes.scailo_pb.ts:552](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L552)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:540](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L540)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:544](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L544)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceAutofillRequest`](DebitNotesServiceAutofillRequest.md)

#### Defined in

[src/debit_notes.scailo_pb.ts:548](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/debit_notes.scailo_pb.ts#L548)
