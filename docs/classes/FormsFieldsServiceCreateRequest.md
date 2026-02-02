[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsFieldsServiceCreateRequest

# Class: FormsFieldsServiceCreateRequest

Describes the necessary data structure during creation of a form field

**`Generated`**

from message Scailo.FormsFieldsServiceCreateRequest

## Hierarchy

- `Message`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\>

  ↳ **`FormsFieldsServiceCreateRequest`**

## Table of contents

### Constructors

- [constructor](FormsFieldsServiceCreateRequest.md#constructor)

### Properties

- [code](FormsFieldsServiceCreateRequest.md#code)
- [definedValues](FormsFieldsServiceCreateRequest.md#definedvalues)
- [element](FormsFieldsServiceCreateRequest.md#element)
- [entityUuid](FormsFieldsServiceCreateRequest.md#entityuuid)
- [isHidden](FormsFieldsServiceCreateRequest.md#ishidden)
- [isPublic](FormsFieldsServiceCreateRequest.md#ispublic)
- [isReadonly](FormsFieldsServiceCreateRequest.md#isreadonly)
- [isSearchable](FormsFieldsServiceCreateRequest.md#issearchable)
- [name](FormsFieldsServiceCreateRequest.md#name)
- [placeholder](FormsFieldsServiceCreateRequest.md#placeholder)
- [regex](FormsFieldsServiceCreateRequest.md#regex)
- [sectionId](FormsFieldsServiceCreateRequest.md#sectionid)
- [type](FormsFieldsServiceCreateRequest.md#type)
- [userComment](FormsFieldsServiceCreateRequest.md#usercomment)
- [width](FormsFieldsServiceCreateRequest.md#width)
- [fields](FormsFieldsServiceCreateRequest.md#fields)
- [runtime](FormsFieldsServiceCreateRequest.md#runtime)
- [typeName](FormsFieldsServiceCreateRequest.md#typename)

### Methods

- [clone](FormsFieldsServiceCreateRequest.md#clone)
- [equals](FormsFieldsServiceCreateRequest.md#equals)
- [fromBinary](FormsFieldsServiceCreateRequest.md#frombinary)
- [fromJson](FormsFieldsServiceCreateRequest.md#fromjson)
- [fromJsonString](FormsFieldsServiceCreateRequest.md#fromjsonstring)
- [getType](FormsFieldsServiceCreateRequest.md#gettype)
- [toBinary](FormsFieldsServiceCreateRequest.md#tobinary)
- [toJSON](FormsFieldsServiceCreateRequest.md#tojson)
- [toJson](FormsFieldsServiceCreateRequest.md#tojson-1)
- [toJsonString](FormsFieldsServiceCreateRequest.md#tojsonstring)
- [equals](FormsFieldsServiceCreateRequest.md#equals-1)
- [fromBinary](FormsFieldsServiceCreateRequest.md#frombinary-1)
- [fromJson](FormsFieldsServiceCreateRequest.md#fromjson-1)
- [fromJsonString](FormsFieldsServiceCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsFieldsServiceCreateRequest**(`data?`): [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\> |

#### Returns

[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Overrides

Message\&lt;FormsFieldsServiceCreateRequest\&gt;.constructor

#### Defined in

[src/forms_fields.scailo_pb.ts:443](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L443)

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form field is classified

**`Generated`**

from field: string code = 21;

#### Defined in

[src/forms_fields.scailo_pb.ts:364](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L364)

___

### definedValues

• **definedValues**: `string`[] = `[]`

The possible values that are applicable on the form field (in case of dropdowns, radio buttons, checkboxes)

**`Generated`**

from field: repeated string defined_values = 17;

#### Defined in

[src/forms_fields.scailo_pb.ts:413](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L413)

___

### element

• **element**: [`FORM_FIELD_ELEMENT`](../enums/FORM_FIELD_ELEMENT.md) = `FORM_FIELD_ELEMENT.FORM_FIELD_ELEMENT_ANY_UNSPECIFIED`

The type of the element

**`Generated`**

from field: Scailo.FORM_FIELD_ELEMENT element = 14;

#### Defined in

[src/forms_fields.scailo_pb.ts:392](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L392)

___

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

[src/forms_fields.scailo_pb.ts:343](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L343)

___

### isHidden

• **isHidden**: `boolean` = `false`

Denotes if the field is hidden (field shall not be visible on the UI). The field shall be visible only through the API

**`Generated`**

from field: bool is_hidden = 31;

#### Defined in

[src/forms_fields.scailo_pb.ts:427](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L427)

___

### isPublic

• **isPublic**: `boolean` = `false`

Denotes if the field is public (field shall be visible on any custom designed public interfaces)

**`Generated`**

from field: bool is_public = 33;

#### Defined in

[src/forms_fields.scailo_pb.ts:441](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L441)

___

### isReadonly

• **isReadonly**: `boolean` = `false`

Denotes if the field is readonly (changes shall not be allowed to be made on the UI). Any changes will still be made through the API

**`Generated`**

from field: bool is_readonly = 30;

#### Defined in

[src/forms_fields.scailo_pb.ts:420](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L420)

___

### isSearchable

• **isSearchable**: `boolean` = `false`

Denotes if the field is searchable (field shall not be visible on the UI in the filters view). The field will continue to be searchable through the API

**`Generated`**

from field: bool is_searchable = 32;

#### Defined in

[src/forms_fields.scailo_pb.ts:434](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L434)

___

### name

• **name**: `string` = `""`

The name of the form field

**`Generated`**

from field: string name = 10;

#### Defined in

[src/forms_fields.scailo_pb.ts:357](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L357)

___

### placeholder

• **placeholder**: `string` = `""`

The placeholder of the form field

**`Generated`**

from field: string placeholder = 15;

#### Defined in

[src/forms_fields.scailo_pb.ts:399](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L399)

___

### regex

• **regex**: `string` = `""`

The regex that is applicable on the form field

**`Generated`**

from field: string regex = 16;

#### Defined in

[src/forms_fields.scailo_pb.ts:406](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L406)

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form section that the form field belongs to

**`Generated`**

from field: uint64 section_id = 12;

#### Defined in

[src/forms_fields.scailo_pb.ts:378](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L378)

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form field

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

[src/forms_fields.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L371)

___

### userComment

• **userComment**: `string` = `""`

Stores any comment that the user might add during this operation

**`Generated`**

from field: string user_comment = 2;

#### Defined in

[src/forms_fields.scailo_pb.ts:350](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L350)

___

### width

• **width**: `string` = `""`

The width of the form field

**`Generated`**

from field: string width = 13;

#### Defined in

[src/forms_fields.scailo_pb.ts:385](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L385)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields.scailo_pb.ts:450](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L450)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields.scailo_pb.ts:448](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L448)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsFieldsServiceCreateRequest"``

#### Defined in

[src/forms_fields.scailo_pb.ts:449](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L449)

## Methods

### clone

▸ **clone**(): [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

Create a deep copy.

#### Returns

[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md) \| `PlainMessage`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\>

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
| `a` | `undefined` \| [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md) \| `PlainMessage`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\> |
| `b` | `undefined` \| [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md) \| `PlainMessage`\<[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields.scailo_pb.ts:480](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L480)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:468](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L468)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:472](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L472)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceCreateRequest`](FormsFieldsServiceCreateRequest.md)

#### Defined in

[src/forms_fields.scailo_pb.ts:476](https://github.com/scailo/ts-sdk/blob/2a556b3915e3ec9841b11f46e795a4f74de69808/src/forms_fields.scailo_pb.ts#L476)
