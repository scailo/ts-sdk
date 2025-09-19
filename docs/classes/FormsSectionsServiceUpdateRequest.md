[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsServiceUpdateRequest

# Class: FormsSectionsServiceUpdateRequest

Describes the data structure to perform the update (draft/revision) operation on a form section

**`Generated`**

from message Scailo.FormsSectionsServiceUpdateRequest

## Hierarchy

- `Message`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\>

  ↳ **`FormsSectionsServiceUpdateRequest`**

## Table of contents

### Constructors

- [constructor](FormsSectionsServiceUpdateRequest.md#constructor)

### Properties

- [code](FormsSectionsServiceUpdateRequest.md#code)
- [description](FormsSectionsServiceUpdateRequest.md#description)
- [id](FormsSectionsServiceUpdateRequest.md#id)
- [name](FormsSectionsServiceUpdateRequest.md#name)
- [userComment](FormsSectionsServiceUpdateRequest.md#usercomment)
- [width](FormsSectionsServiceUpdateRequest.md#width)
- [fields](FormsSectionsServiceUpdateRequest.md#fields)
- [runtime](FormsSectionsServiceUpdateRequest.md#runtime)
- [typeName](FormsSectionsServiceUpdateRequest.md#typename)

### Methods

- [clone](FormsSectionsServiceUpdateRequest.md#clone)
- [equals](FormsSectionsServiceUpdateRequest.md#equals)
- [fromBinary](FormsSectionsServiceUpdateRequest.md#frombinary)
- [fromJson](FormsSectionsServiceUpdateRequest.md#fromjson)
- [fromJsonString](FormsSectionsServiceUpdateRequest.md#fromjsonstring)
- [getType](FormsSectionsServiceUpdateRequest.md#gettype)
- [toBinary](FormsSectionsServiceUpdateRequest.md#tobinary)
- [toJSON](FormsSectionsServiceUpdateRequest.md#tojson)
- [toJson](FormsSectionsServiceUpdateRequest.md#tojson-1)
- [toJsonString](FormsSectionsServiceUpdateRequest.md#tojsonstring)
- [equals](FormsSectionsServiceUpdateRequest.md#equals-1)
- [fromBinary](FormsSectionsServiceUpdateRequest.md#frombinary-1)
- [fromJson](FormsSectionsServiceUpdateRequest.md#fromjson-1)
- [fromJsonString](FormsSectionsServiceUpdateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsServiceUpdateRequest**(`data?`): [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\> |

#### Returns

[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Overrides

Message\&lt;FormsSectionsServiceUpdateRequest\&gt;.constructor

#### Defined in

[src/forms_sections.scailo_pb.ts:398](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L398)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form section is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/forms_sections.scailo_pb.ts:382](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L382)

___

### description

• **description**: `string` = `""`

A short description of the form section

**`Generated`**

from field: string description = 12;

#### Defined in

[src/forms_sections.scailo_pb.ts:389](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L389)

___

### id

• **id**: `bigint` = `protoInt64.zero`

The ID of the form section that needs to be updated

**`Generated`**

from field: uint64 id = 2;

#### Defined in

[src/forms_sections.scailo_pb.ts:368](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L368)

___

### name

• **name**: `string` = `""`

The name of the form section

**`Generated`**

from field: string name = 10;

#### Defined in

[src/forms_sections.scailo_pb.ts:375](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L375)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 1;

#### Defined in

[src/forms_sections.scailo_pb.ts:361](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L361)

___

### width

• **width**: `string` = `""`

The width of the form section

**`Generated`**

from field: string width = 13;

#### Defined in

[src/forms_sections.scailo_pb.ts:396](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L396)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_sections.scailo_pb.ts:405](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L405)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_sections.scailo_pb.ts:403](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L403)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsServiceUpdateRequest"``

#### Defined in

[src/forms_sections.scailo_pb.ts:404](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L404)

## Methods

### clone

▸ **clone**(): [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

Create a deep copy.

#### Returns

[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md) \| `PlainMessage`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\>

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
| `a` | `undefined` \| [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md) \| `PlainMessage`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\> |
| `b` | `undefined` \| [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md) \| `PlainMessage`\<[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_sections.scailo_pb.ts:426](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L426)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:414](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L414)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:418](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L418)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceUpdateRequest`](FormsSectionsServiceUpdateRequest.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:422](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L422)
