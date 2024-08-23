[@unaxiom/scailo-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatum

# Class: FormFieldDatum

Describes the data stored in an individual form field data row of each dynamic form

**`Generated`**

from message Scailo.FormFieldDatum

## Hierarchy

- `Message`\<[`FormFieldDatum`](FormFieldDatum.md)\>

  ↳ **`FormFieldDatum`**

## Table of contents

### Constructors

- [constructor](FormFieldDatum.md#constructor)

### Properties

- [entityUuid](FormFieldDatum.md#entityuuid)
- [formField](FormFieldDatum.md#formfield)
- [formFieldId](FormFieldDatum.md#formfieldid)
- [metadata](FormFieldDatum.md#metadata)
- [needApproval](FormFieldDatum.md#needapproval)
- [refUuid](FormFieldDatum.md#refuuid)
- [selectedValues](FormFieldDatum.md#selectedvalues)
- [value](FormFieldDatum.md#value)
- [fields](FormFieldDatum.md#fields)
- [runtime](FormFieldDatum.md#runtime)
- [typeName](FormFieldDatum.md#typename)

### Methods

- [clone](FormFieldDatum.md#clone)
- [equals](FormFieldDatum.md#equals)
- [fromBinary](FormFieldDatum.md#frombinary)
- [fromJson](FormFieldDatum.md#fromjson)
- [fromJsonString](FormFieldDatum.md#fromjsonstring)
- [getType](FormFieldDatum.md#gettype)
- [toBinary](FormFieldDatum.md#tobinary)
- [toJSON](FormFieldDatum.md#tojson)
- [toJson](FormFieldDatum.md#tojson-1)
- [toJsonString](FormFieldDatum.md#tojsonstring)
- [equals](FormFieldDatum.md#equals-1)
- [fromBinary](FormFieldDatum.md#frombinary-1)
- [fromJson](FormFieldDatum.md#fromjson-1)
- [fromJsonString](FormFieldDatum.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatum**(`data?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormFieldDatum`](FormFieldDatum.md)\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Overrides

Message\&lt;FormFieldDatum\&gt;.constructor

#### Defined in

src/forms_fields_data.scailo_pb.ts:74

## Properties

### entityUuid

• **entityUuid**: `string` = `""`

Stores a globally unique entity UUID. This will be set at the organization level

**`Generated`**

from field: string entity_uuid = 1;

#### Defined in

src/forms_fields_data.scailo_pb.ts:23

___

### formField

• `Optional` **formField**: [`FormField`](FormField.md)

The underlying form field (from the form_field_id)

**`Generated`**

from field: Scailo.FormField form_field = 20;

#### Defined in

src/forms_fields_data.scailo_pb.ts:44

___

### formFieldId

• **formFieldId**: `bigint` = `protoInt64.zero`

The ID of the form field

**`Generated`**

from field: uint64 form_field_id = 10;

#### Defined in

src/forms_fields_data.scailo_pb.ts:37

___

### metadata

• `Optional` **metadata**: [`EmployeeMetadata`](EmployeeMetadata.md)

Stores the metadata of this resource

**`Generated`**

from field: Scailo.EmployeeMetadata metadata = 2;

#### Defined in

src/forms_fields_data.scailo_pb.ts:30

___

### needApproval

• **needApproval**: `boolean` = `false`

Denotes if this field requires approval by a competent authority

**`Generated`**

from field: bool need_approval = 24;

#### Defined in

src/forms_fields_data.scailo_pb.ts:72

___

### refUuid

• **refUuid**: `string` = `""`

The UUID that this field belongs to

**`Generated`**

from field: string ref_uuid = 21;

#### Defined in

src/forms_fields_data.scailo_pb.ts:51

___

### selectedValues

• **selectedValues**: `string`[] = `[]`

The list of values that have been selected by the user (in case of a checkbox or a dropdown)

**`Generated`**

from field: repeated string selected_values = 23;

#### Defined in

src/forms_fields_data.scailo_pb.ts:65

___

### value

• **value**: `string` = `""`

The value entered by the user

**`Generated`**

from field: string value = 22;

#### Defined in

src/forms_fields_data.scailo_pb.ts:58

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_fields_data.scailo_pb.ts:81

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_fields_data.scailo_pb.ts:79

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormFieldDatum"``

#### Defined in

src/forms_fields_data.scailo_pb.ts:80

## Methods

### clone

▸ **clone**(): [`FormFieldDatum`](FormFieldDatum.md)

Create a deep copy.

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatum`](FormFieldDatum.md) \| `PlainMessage`\<[`FormFieldDatum`](FormFieldDatum.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormFieldDatum`](FormFieldDatum.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormFieldDatum`](FormFieldDatum.md)\>

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
| `a` | `undefined` \| [`FormFieldDatum`](FormFieldDatum.md) \| `PlainMessage`\<[`FormFieldDatum`](FormFieldDatum.md)\> |
| `b` | `undefined` \| [`FormFieldDatum`](FormFieldDatum.md) \| `PlainMessage`\<[`FormFieldDatum`](FormFieldDatum.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_fields_data.scailo_pb.ts:104

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Defined in

src/forms_fields_data.scailo_pb.ts:92

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Defined in

src/forms_fields_data.scailo_pb.ts:96

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatum`](FormFieldDatum.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatum`](FormFieldDatum.md)

#### Defined in

src/forms_fields_data.scailo_pb.ts:100
