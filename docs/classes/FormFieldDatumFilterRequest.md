[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatumFilterRequest

# Class: FormFieldDatumFilterRequest

Describes the data required to filter for records using form field data

**`Generated`**

from message Scailo.FormFieldDatumFilterRequest

## Hierarchy

- `Message`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\>

  ↳ **`FormFieldDatumFilterRequest`**

## Table of contents

### Constructors

- [constructor](FormFieldDatumFilterRequest.md#constructor)

### Properties

- [formFieldId](FormFieldDatumFilterRequest.md#formfieldid)
- [operator](FormFieldDatumFilterRequest.md#operator)
- [value](FormFieldDatumFilterRequest.md#value)
- [fields](FormFieldDatumFilterRequest.md#fields)
- [runtime](FormFieldDatumFilterRequest.md#runtime)
- [typeName](FormFieldDatumFilterRequest.md#typename)

### Methods

- [clone](FormFieldDatumFilterRequest.md#clone)
- [equals](FormFieldDatumFilterRequest.md#equals)
- [fromBinary](FormFieldDatumFilterRequest.md#frombinary)
- [fromJson](FormFieldDatumFilterRequest.md#fromjson)
- [fromJsonString](FormFieldDatumFilterRequest.md#fromjsonstring)
- [getType](FormFieldDatumFilterRequest.md#gettype)
- [toBinary](FormFieldDatumFilterRequest.md#tobinary)
- [toJSON](FormFieldDatumFilterRequest.md#tojson)
- [toJson](FormFieldDatumFilterRequest.md#tojson-1)
- [toJsonString](FormFieldDatumFilterRequest.md#tojsonstring)
- [equals](FormFieldDatumFilterRequest.md#equals-1)
- [fromBinary](FormFieldDatumFilterRequest.md#frombinary-1)
- [fromJson](FormFieldDatumFilterRequest.md#fromjson-1)
- [fromJsonString](FormFieldDatumFilterRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatumFilterRequest**(`data?`): [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\> |

#### Returns

[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Overrides

Message\&lt;FormFieldDatumFilterRequest\&gt;.constructor

#### Defined in

[src/forms_fields_data.scailo_pb.ts:346](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L346)

## Properties

### formFieldId

• **formFieldId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form field

**`Generated`**

from field: uint64 form_field_id = 1;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:330](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L330)

___

### operator

• **operator**: [`FORM_FIELD_FILTER_OPERATOR`](../enums/FORM_FIELD_FILTER_OPERATOR.md) = `FORM_FIELD_FILTER_OPERATOR.FORM_FIELD_FILTER_OPERATOR_SIMILARITY_UNSPECIFIED`

The operator to be used

**`Generated`**

from field: Scailo.FORM_FIELD_FILTER_OPERATOR operator = 10;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:344](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L344)

___

### value

• **value**: `string` = `""`

The value to be filtered

**`Generated`**

from field: string value = 2;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:337](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L337)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:353](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L353)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:351](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L351)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormFieldDatumFilterRequest"``

#### Defined in

[src/forms_fields_data.scailo_pb.ts:352](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L352)

## Methods

### clone

▸ **clone**(): [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

Create a deep copy.

#### Returns

[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md) \| `PlainMessage`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\>

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
| `a` | `undefined` \| [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md) \| `PlainMessage`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\> |
| `b` | `undefined` \| [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md) \| `PlainMessage`\<[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:371](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L371)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:359](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L359)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:363](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L363)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumFilterRequest`](FormFieldDatumFilterRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:367](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L367)
