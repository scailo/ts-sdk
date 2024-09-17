[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsFieldsServiceCountReq

# Class: FormsFieldsServiceCountReq

Describes the base request payload of a count search

**`Generated`**

from message Scailo.FormsFieldsServiceCountReq

## Hierarchy

- `Message`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\>

  ↳ **`FormsFieldsServiceCountReq`**

## Table of contents

### Constructors

- [constructor](FormsFieldsServiceCountReq.md#constructor)

### Properties

- [creationTimestampEnd](FormsFieldsServiceCountReq.md#creationtimestampend)
- [creationTimestampStart](FormsFieldsServiceCountReq.md#creationtimestampstart)
- [entityUuid](FormsFieldsServiceCountReq.md#entityuuid)
- [isActive](FormsFieldsServiceCountReq.md#isactive)
- [modificationTimestampEnd](FormsFieldsServiceCountReq.md#modificationtimestampend)
- [modificationTimestampStart](FormsFieldsServiceCountReq.md#modificationtimestampstart)
- [name](FormsFieldsServiceCountReq.md#name)
- [sectionId](FormsFieldsServiceCountReq.md#sectionid)
- [type](FormsFieldsServiceCountReq.md#type)
- [fields](FormsFieldsServiceCountReq.md#fields)
- [runtime](FormsFieldsServiceCountReq.md#runtime)
- [typeName](FormsFieldsServiceCountReq.md#typename)

### Methods

- [clone](FormsFieldsServiceCountReq.md#clone)
- [equals](FormsFieldsServiceCountReq.md#equals)
- [fromBinary](FormsFieldsServiceCountReq.md#frombinary)
- [fromJson](FormsFieldsServiceCountReq.md#fromjson)
- [fromJsonString](FormsFieldsServiceCountReq.md#fromjsonstring)
- [getType](FormsFieldsServiceCountReq.md#gettype)
- [toBinary](FormsFieldsServiceCountReq.md#tobinary)
- [toJSON](FormsFieldsServiceCountReq.md#tojson)
- [toJson](FormsFieldsServiceCountReq.md#tojson-1)
- [toJsonString](FormsFieldsServiceCountReq.md#tojsonstring)
- [equals](FormsFieldsServiceCountReq.md#equals-1)
- [fromBinary](FormsFieldsServiceCountReq.md#frombinary-1)
- [fromJson](FormsFieldsServiceCountReq.md#fromjson-1)
- [fromJsonString](FormsFieldsServiceCountReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsFieldsServiceCountReq**(`data?`): [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\> |

#### Returns

[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Overrides

Message\&lt;FormsFieldsServiceCountReq\&gt;.constructor

#### Defined in

src/forms_fields.scailo_pb.ts:817

## Properties

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/forms_fields.scailo_pb.ts:773

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/forms_fields.scailo_pb.ts:766

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/forms_fields.scailo_pb.ts:794

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/forms_fields.scailo_pb.ts:759

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/forms_fields.scailo_pb.ts:787

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/forms_fields.scailo_pb.ts:780

___

### name

• **name**: `string` = `""`

The name of the form field

**`Generated`**

from field: string name = 10;

#### Defined in

src/forms_fields.scailo_pb.ts:801

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form section that the form field belongs to

**`Generated`**

from field: uint64 section_id = 12;

#### Defined in

src/forms_fields.scailo_pb.ts:815

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form field

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

src/forms_fields.scailo_pb.ts:808

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_fields.scailo_pb.ts:824

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_fields.scailo_pb.ts:822

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsFieldsServiceCountReq"``

#### Defined in

src/forms_fields.scailo_pb.ts:823

## Methods

### clone

▸ **clone**(): [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

Create a deep copy.

#### Returns

[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md) \| `PlainMessage`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\>

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
| `a` | `undefined` \| [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md) \| `PlainMessage`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\> |
| `b` | `undefined` \| [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md) \| `PlainMessage`\<[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_fields.scailo_pb.ts:848

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Defined in

src/forms_fields.scailo_pb.ts:836

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Defined in

src/forms_fields.scailo_pb.ts:840

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceCountReq`](FormsFieldsServiceCountReq.md)

#### Defined in

src/forms_fields.scailo_pb.ts:844
