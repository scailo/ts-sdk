[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceAutofillRequest

# Class: CreditNotesServiceAutofillRequest

Describes the parameters necessary to perform an autofill request

**`Generated`**

from message Scailo.CreditNotesServiceAutofillRequest

## Hierarchy

- `Message`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\>

  ↳ **`CreditNotesServiceAutofillRequest`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceAutofillRequest.md#constructor)

### Properties

- [id](CreditNotesServiceAutofillRequest.md#id)
- [userComment](CreditNotesServiceAutofillRequest.md#usercomment)
- [fields](CreditNotesServiceAutofillRequest.md#fields)
- [runtime](CreditNotesServiceAutofillRequest.md#runtime)
- [typeName](CreditNotesServiceAutofillRequest.md#typename)

### Methods

- [clone](CreditNotesServiceAutofillRequest.md#clone)
- [equals](CreditNotesServiceAutofillRequest.md#equals)
- [fromBinary](CreditNotesServiceAutofillRequest.md#frombinary)
- [fromJson](CreditNotesServiceAutofillRequest.md#fromjson)
- [fromJsonString](CreditNotesServiceAutofillRequest.md#fromjsonstring)
- [getType](CreditNotesServiceAutofillRequest.md#gettype)
- [toBinary](CreditNotesServiceAutofillRequest.md#tobinary)
- [toJSON](CreditNotesServiceAutofillRequest.md#tojson)
- [toJson](CreditNotesServiceAutofillRequest.md#tojson-1)
- [toJsonString](CreditNotesServiceAutofillRequest.md#tojsonstring)
- [equals](CreditNotesServiceAutofillRequest.md#equals-1)
- [fromBinary](CreditNotesServiceAutofillRequest.md#frombinary-1)
- [fromJson](CreditNotesServiceAutofillRequest.md#fromjson-1)
- [fromJsonString](CreditNotesServiceAutofillRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceAutofillRequest**(`data?`): [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\> |

#### Returns

[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Overrides

Message\&lt;CreditNotesServiceAutofillRequest\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:517

## Properties

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the record that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:515

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:508

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:524

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:522

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceAutofillRequest"``

#### Defined in

src/credit_notes.scailo_pb.ts:523

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md) \| `PlainMessage`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md) \| `PlainMessage`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md) \| `PlainMessage`\<[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:541

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:529

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:533

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceAutofillRequest`](CreditNotesServiceAutofillRequest.md)

#### Defined in

src/credit_notes.scailo_pb.ts:537
