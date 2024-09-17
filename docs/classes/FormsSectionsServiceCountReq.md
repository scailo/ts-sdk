[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsServiceCountReq

# Class: FormsSectionsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.FormsSectionsServiceCountReq

## Hierarchy

- `Message`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\>

  ↳ **`FormsSectionsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](FormsSectionsServiceCountReq.md#constructor)

### Properties

- [creationTimestampEnd](FormsSectionsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](FormsSectionsServiceCountReq.md#creationtimestampstart)
- [entityUuid](FormsSectionsServiceCountReq.md#entityuuid)
- [isActive](FormsSectionsServiceCountReq.md#isactive)
- [modificationTimestampEnd](FormsSectionsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](FormsSectionsServiceCountReq.md#modificationtimestampstart)
- [name](FormsSectionsServiceCountReq.md#name)
- [type](FormsSectionsServiceCountReq.md#type)
- [fields](FormsSectionsServiceCountReq.md#fields)
- [runtime](FormsSectionsServiceCountReq.md#runtime)
- [typeName](FormsSectionsServiceCountReq.md#typename)

### Methods

- [clone](FormsSectionsServiceCountReq.md#clone)
- [equals](FormsSectionsServiceCountReq.md#equals)
- [fromBinary](FormsSectionsServiceCountReq.md#frombinary)
- [fromJson](FormsSectionsServiceCountReq.md#fromjson)
- [fromJsonString](FormsSectionsServiceCountReq.md#fromjsonstring)
- [getType](FormsSectionsServiceCountReq.md#gettype)
- [toBinary](FormsSectionsServiceCountReq.md#tobinary)
- [toJSON](FormsSectionsServiceCountReq.md#tojson)
- [toJson](FormsSectionsServiceCountReq.md#tojson-1)
- [toJsonString](FormsSectionsServiceCountReq.md#tojsonstring)
- [equals](FormsSectionsServiceCountReq.md#equals-1)
- [fromBinary](FormsSectionsServiceCountReq.md#frombinary-1)
- [fromJson](FormsSectionsServiceCountReq.md#fromjson-1)
- [fromJsonString](FormsSectionsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsServiceCountReq**(`data?`): [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\> |

#### Returns

[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Overrides

Message\&lt;FormsSectionsServiceCountReq\&gt;.constructor

#### Defined in

src/forms_sections.scailo_pb.ts:666

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/forms_sections.scailo_pb.ts:629

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/forms_sections.scailo_pb.ts:622

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/forms_sections.scailo_pb.ts:650

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/forms_sections.scailo_pb.ts:615

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/forms_sections.scailo_pb.ts:643

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/forms_sections.scailo_pb.ts:636

___

### name

• **name**: `string` = `""`

The name of the form section

**`Generated`**

from field: string name = 10;

#### Defined in

src/forms_sections.scailo_pb.ts:657

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form section

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

src/forms_sections.scailo_pb.ts:664

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_sections.scailo_pb.ts:673

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_sections.scailo_pb.ts:671

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsServiceCountReq"``

#### Defined in

src/forms_sections.scailo_pb.ts:672

## Methods

### clone

▸ **clone**(): [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

Create a deep copy.

#### Returns

[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md) \| `PlainMessage`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md) \| `PlainMessage`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\> |
| `b` | `undefined` \| [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md) \| `PlainMessage`\<[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_sections.scailo_pb.ts:696

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:684

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:688

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceCountReq`](FormsSectionsServiceCountReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:692
