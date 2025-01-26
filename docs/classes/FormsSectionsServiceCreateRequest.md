[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsServiceCreateRequest

# Class: FormsSectionsServiceCreateRequest

Describes the necessary data structure during creation of a form section

**`Generated`**

from message Scailo.FormsSectionsServiceCreateRequest

## Hierarchy

- `Message`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\>

  ↳ **`FormsSectionsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](FormsSectionsServiceCreateRequest.md#constructor)

### Properties

- [code](FormsSectionsServiceCreateRequest.md#code)
- [description](FormsSectionsServiceCreateRequest.md#description)
- [entityUuid](FormsSectionsServiceCreateRequest.md#entityuuid)
- [name](FormsSectionsServiceCreateRequest.md#name)
- [type](FormsSectionsServiceCreateRequest.md#type)
- [userComment](FormsSectionsServiceCreateRequest.md#usercomment)
- [width](FormsSectionsServiceCreateRequest.md#width)
- [fields](FormsSectionsServiceCreateRequest.md#fields)
- [runtime](FormsSectionsServiceCreateRequest.md#runtime)
- [typeName](FormsSectionsServiceCreateRequest.md#typename)

### Methods

- [clone](FormsSectionsServiceCreateRequest.md#clone)
- [equals](FormsSectionsServiceCreateRequest.md#equals)
- [fromBinary](FormsSectionsServiceCreateRequest.md#frombinary)
- [fromJson](FormsSectionsServiceCreateRequest.md#fromjson)
- [fromJsonString](FormsSectionsServiceCreateRequest.md#fromjsonstring)
- [getType](FormsSectionsServiceCreateRequest.md#gettype)
- [toBinary](FormsSectionsServiceCreateRequest.md#tobinary)
- [toJSON](FormsSectionsServiceCreateRequest.md#tojson)
- [toJson](FormsSectionsServiceCreateRequest.md#tojson-1)
- [toJsonString](FormsSectionsServiceCreateRequest.md#tojsonstring)
- [equals](FormsSectionsServiceCreateRequest.md#equals-1)
- [fromBinary](FormsSectionsServiceCreateRequest.md#frombinary-1)
- [fromJson](FormsSectionsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](FormsSectionsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsServiceCreateRequest**(`data?`): [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\> |

#### Returns

[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Overrides

Message\&lt;FormsSectionsServiceCreateRequest\&gt;.constructor

#### Defined in

src/forms_sections.scailo_pb.ts:315

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form section is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/forms_sections.scailo_pb.ts:292

___

### description

• **description**: `string` = `""`

A short description of the form section

**`Generated`**

from field: string description = 12;

#### Defined in

src/forms_sections.scailo_pb.ts:306

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/forms_sections.scailo_pb.ts:271

___

### name

• **name**: `string` = `""`

The name of the form section

**`Generated`**

from field: string name = 10;

#### Defined in

src/forms_sections.scailo_pb.ts:285

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form section

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

src/forms_sections.scailo_pb.ts:299

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

src/forms_sections.scailo_pb.ts:278

___

### width

• **width**: `string` = `""`

The width of the form section

**`Generated`**

from field: string width = 13;

#### Defined in

src/forms_sections.scailo_pb.ts:313

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_sections.scailo_pb.ts:322

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_sections.scailo_pb.ts:320

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsServiceCreateRequest"``

#### Defined in

src/forms_sections.scailo_pb.ts:321

## Methods

### clone

▸ **clone**(): [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md) \| `PlainMessage`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md) \| `PlainMessage`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md) \| `PlainMessage`\<[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_sections.scailo_pb.ts:344

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Defined in

src/forms_sections.scailo_pb.ts:332

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Defined in

src/forms_sections.scailo_pb.ts:336

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceCreateRequest`](FormsSectionsServiceCreateRequest.md)

#### Defined in

src/forms_sections.scailo_pb.ts:340
