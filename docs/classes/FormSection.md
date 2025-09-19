[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormSection

# Class: FormSection

Describes the data structure of each form section on the platform

**`Generated`**

from message Scailo.FormSection

## Hierarchy

- `Message`\<[`FormSection`](FormSection.md)\>

  ↳ **`FormSection`**

## Table of contents

### Constructors

- [constructor](FormSection.md#constructor)

### Properties

- [code](FormSection.md#code)
- [description](FormSection.md#description)
- [entityUuid](FormSection.md#entityuuid)
- [metadata](FormSection.md#metadata)
- [name](FormSection.md#name)
- [type](FormSection.md#type)
- [width](FormSection.md#width)
- [fields](FormSection.md#fields)
- [runtime](FormSection.md#runtime)
- [typeName](FormSection.md#typename)

### Methods

- [clone](FormSection.md#clone)
- [equals](FormSection.md#equals)
- [fromBinary](FormSection.md#frombinary)
- [fromJson](FormSection.md#fromjson)
- [fromJsonString](FormSection.md#fromjsonstring)
- [getType](FormSection.md#gettype)
- [toBinary](FormSection.md#tobinary)
- [toJSON](FormSection.md#tojson)
- [toJson](FormSection.md#tojson-1)
- [toJsonString](FormSection.md#tojsonstring)
- [equals](FormSection.md#equals-1)
- [fromBinary](FormSection.md#frombinary-1)
- [fromJson](FormSection.md#fromjson-1)
- [fromJsonString](FormSection.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormSection**(`data?`): [`FormSection`](FormSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormSection`](FormSection.md)\> |

#### Returns

[`FormSection`](FormSection.md)

#### Overrides

Message\&lt;FormSection\&gt;.constructor

#### Defined in

[src/forms_sections.scailo_pb.ts:117](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L117)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form section is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/forms_sections.scailo_pb.ts:94](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L94)

___

### description

• **description**: `string` = `""`

A short description of the form section

**`Generated`**

from field: string description = 12;

#### Defined in

[src/forms_sections.scailo_pb.ts:108](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L108)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/forms_sections.scailo_pb.ts:73](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L73)

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

[src/forms_sections.scailo_pb.ts:80](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L80)

___

### name

• **name**: `string` = `""`

The name of the form section

**`Generated`**

from field: string name = 10;

#### Defined in

[src/forms_sections.scailo_pb.ts:87](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L87)

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form section

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

[src/forms_sections.scailo_pb.ts:101](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L101)

___

### width

• **width**: `string` = `""`

The width of the form section

**`Generated`**

from field: string width = 13;

#### Defined in

[src/forms_sections.scailo_pb.ts:115](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L115)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_sections.scailo_pb.ts:124](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L124)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_sections.scailo_pb.ts:122](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L122)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormSection"``

#### Defined in

[src/forms_sections.scailo_pb.ts:123](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L123)

## Methods

### clone

▸ **clone**(): [`FormSection`](FormSection.md)

Create a deep copy.

#### Returns

[`FormSection`](FormSection.md)

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
| `other` | `undefined` \| ``null`` \| [`FormSection`](FormSection.md) \| `PlainMessage`\<[`FormSection`](FormSection.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormSection`](FormSection.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormSection`](FormSection.md)\>

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
| `a` | `undefined` \| [`FormSection`](FormSection.md) \| `PlainMessage`\<[`FormSection`](FormSection.md)\> |
| `b` | `undefined` \| [`FormSection`](FormSection.md) \| `PlainMessage`\<[`FormSection`](FormSection.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_sections.scailo_pb.ts:146](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L146)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormSection`](FormSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormSection`](FormSection.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:134](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L134)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormSection`](FormSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormSection`](FormSection.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:138](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L138)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormSection`](FormSection.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormSection`](FormSection.md)

#### Defined in

[src/forms_sections.scailo_pb.ts:142](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_sections.scailo_pb.ts#L142)
