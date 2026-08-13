[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatumCreateRequest

# Class: FormFieldDatumCreateRequest

Represents a single data entry for a dynamic form field.
* Use this to submit values for custom fields defined at the organization level,
such as "Emergency Contact Name" or "T-Shirt Size".

**`Generated`**

from message Scailo.FormFieldDatumCreateRequest

## Hierarchy

- `Message`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\>

  ↳ **`FormFieldDatumCreateRequest`**

## Table of contents

### Constructors

- [constructor](FormFieldDatumCreateRequest.md#constructor)

### Properties

- [formFieldId](FormFieldDatumCreateRequest.md#formfieldid)
- [selectedValues](FormFieldDatumCreateRequest.md#selectedvalues)
- [value](FormFieldDatumCreateRequest.md#value)
- [fields](FormFieldDatumCreateRequest.md#fields)
- [runtime](FormFieldDatumCreateRequest.md#runtime)
- [typeName](FormFieldDatumCreateRequest.md#typename)

### Methods

- [clone](FormFieldDatumCreateRequest.md#clone)
- [equals](FormFieldDatumCreateRequest.md#equals)
- [fromBinary](FormFieldDatumCreateRequest.md#frombinary)
- [fromJson](FormFieldDatumCreateRequest.md#fromjson)
- [fromJsonString](FormFieldDatumCreateRequest.md#fromjsonstring)
- [getType](FormFieldDatumCreateRequest.md#gettype)
- [toBinary](FormFieldDatumCreateRequest.md#tobinary)
- [toJSON](FormFieldDatumCreateRequest.md#tojson)
- [toJson](FormFieldDatumCreateRequest.md#tojson-1)
- [toJsonString](FormFieldDatumCreateRequest.md#tojsonstring)
- [equals](FormFieldDatumCreateRequest.md#equals-1)
- [fromBinary](FormFieldDatumCreateRequest.md#frombinary-1)
- [fromJson](FormFieldDatumCreateRequest.md#fromjson-1)
- [fromJsonString](FormFieldDatumCreateRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatumCreateRequest**(`data?`): [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\> |

#### Returns

[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Overrides

Message\&lt;FormFieldDatumCreateRequest\&gt;.constructor

#### Defined in

[src/forms_fields_data.scailo_pb.ts:209](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L209)

## Properties

### formFieldId

• **formFieldId**: `bigint` = `protoInt64.zero`

[Required] The unique identifier of the form field definition.
This ID must correspond to an existing field in the Form Configuration.

**`Generated`**

from field: uint64 form_field_id = 1;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:186](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L186)

___

### selectedValues

• **selectedValues**: `string`[] = `[]`

[Conditional] A list of identifiers for multi-selection fields.
Use this for `radio`, `checkbox`, or `dropdown` field types.

*Note:* For radio buttons, this list should contain exactly one element.
*Example:* ["option_1", "option_5"]

**`Generated`**

from field: repeated string selected_values = 3;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:207](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L207)

___

### value

• **value**: `string` = `""`

[Conditional] The text content for single-value inputs.
Use this for `text`, `textarea`, `number`, or `date` field types.

*Example:* "John Doe" or "123.45"

**`Generated`**

from field: string value = 2;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:196](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L196)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:216](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L216)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:214](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L214)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormFieldDatumCreateRequest"``

#### Defined in

[src/forms_fields_data.scailo_pb.ts:215](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L215)

## Methods

### clone

▸ **clone**(): [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

Create a deep copy.

#### Returns

[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md) \| `PlainMessage`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\>

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
| `a` | `undefined` \| [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md) \| `PlainMessage`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\> |
| `b` | `undefined` \| [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md) \| `PlainMessage`\<[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:234](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L234)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:222](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L222)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:226](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L226)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumCreateRequest`](FormFieldDatumCreateRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:230](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/forms_fields_data.scailo_pb.ts#L230)
