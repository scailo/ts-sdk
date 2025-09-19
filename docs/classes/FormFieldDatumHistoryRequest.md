[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormFieldDatumHistoryRequest

# Class: FormFieldDatumHistoryRequest

Describes the data required to fetch history of the given form field and the specified resource

**`Generated`**

from message Scailo.FormFieldDatumHistoryRequest

## Hierarchy

- `Message`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\>

  ↳ **`FormFieldDatumHistoryRequest`**

## Table of contents

### Constructors

- [constructor](FormFieldDatumHistoryRequest.md#constructor)

### Properties

- [formFieldId](FormFieldDatumHistoryRequest.md#formfieldid)
- [refUuid](FormFieldDatumHistoryRequest.md#refuuid)
- [fields](FormFieldDatumHistoryRequest.md#fields)
- [runtime](FormFieldDatumHistoryRequest.md#runtime)
- [typeName](FormFieldDatumHistoryRequest.md#typename)

### Methods

- [clone](FormFieldDatumHistoryRequest.md#clone)
- [equals](FormFieldDatumHistoryRequest.md#equals)
- [fromBinary](FormFieldDatumHistoryRequest.md#frombinary)
- [fromJson](FormFieldDatumHistoryRequest.md#fromjson)
- [fromJsonString](FormFieldDatumHistoryRequest.md#fromjsonstring)
- [getType](FormFieldDatumHistoryRequest.md#gettype)
- [toBinary](FormFieldDatumHistoryRequest.md#tobinary)
- [toJSON](FormFieldDatumHistoryRequest.md#tojson)
- [toJson](FormFieldDatumHistoryRequest.md#tojson-1)
- [toJsonString](FormFieldDatumHistoryRequest.md#tojsonstring)
- [equals](FormFieldDatumHistoryRequest.md#equals-1)
- [fromBinary](FormFieldDatumHistoryRequest.md#frombinary-1)
- [fromJson](FormFieldDatumHistoryRequest.md#fromjson-1)
- [fromJsonString](FormFieldDatumHistoryRequest.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormFieldDatumHistoryRequest**(`data?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Overrides

Message\&lt;FormFieldDatumHistoryRequest\&gt;.constructor

#### Defined in

[src/forms_fields_data.scailo_pb.ts:289](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L289)

## Properties

### formFieldId

• **formFieldId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form field

**`Generated`**

from field: uint64 form_field_id = 1;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:280](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L280)

___

### refUuid

• **refUuid**: `string` = `""`

The UUID of the corresponding resource

**`Generated`**

from field: string ref_uuid = 2;

#### Defined in

[src/forms_fields_data.scailo_pb.ts:287](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L287)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:296](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L296)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:294](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L294)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormFieldDatumHistoryRequest"``

#### Defined in

[src/forms_fields_data.scailo_pb.ts:295](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L295)

## Methods

### clone

▸ **clone**(): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

Create a deep copy.

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

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
| `other` | `undefined` \| ``null`` \| [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md) \| `PlainMessage`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\>

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
| `a` | `undefined` \| [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md) \| `PlainMessage`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |
| `b` | `undefined` \| [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md) \| `PlainMessage`\<[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)\> |

#### Returns

`boolean`

#### Defined in

[src/forms_fields_data.scailo_pb.ts:313](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L313)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:301](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L301)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:305](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L305)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormFieldDatumHistoryRequest`](FormFieldDatumHistoryRequest.md)

#### Defined in

[src/forms_fields_data.scailo_pb.ts:309](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/forms_fields_data.scailo_pb.ts#L309)
