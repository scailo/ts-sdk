[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsFieldsServiceFilterReq

# Class: FormsFieldsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.FormsFieldsServiceFilterReq

## Hierarchy

- `Message`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\>

  ↳ **`FormsFieldsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](FormsFieldsServiceFilterReq.md#constructor)

### Properties

- [count](FormsFieldsServiceFilterReq.md#count)
- [creationTimestampEnd](FormsFieldsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](FormsFieldsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](FormsFieldsServiceFilterReq.md#entityuuid)
- [isActive](FormsFieldsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](FormsFieldsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](FormsFieldsServiceFilterReq.md#modificationtimestampstart)
- [name](FormsFieldsServiceFilterReq.md#name)
- [offset](FormsFieldsServiceFilterReq.md#offset)
- [sectionId](FormsFieldsServiceFilterReq.md#sectionid)
- [sortKey](FormsFieldsServiceFilterReq.md#sortkey)
- [sortOrder](FormsFieldsServiceFilterReq.md#sortorder)
- [type](FormsFieldsServiceFilterReq.md#type)
- [fields](FormsFieldsServiceFilterReq.md#fields)
- [runtime](FormsFieldsServiceFilterReq.md#runtime)
- [typeName](FormsFieldsServiceFilterReq.md#typename)

### Methods

- [clone](FormsFieldsServiceFilterReq.md#clone)
- [equals](FormsFieldsServiceFilterReq.md#equals)
- [fromBinary](FormsFieldsServiceFilterReq.md#frombinary)
- [fromJson](FormsFieldsServiceFilterReq.md#fromjson)
- [fromJsonString](FormsFieldsServiceFilterReq.md#fromjsonstring)
- [getType](FormsFieldsServiceFilterReq.md#gettype)
- [toBinary](FormsFieldsServiceFilterReq.md#tobinary)
- [toJSON](FormsFieldsServiceFilterReq.md#tojson)
- [toJson](FormsFieldsServiceFilterReq.md#tojson-1)
- [toJsonString](FormsFieldsServiceFilterReq.md#tojsonstring)
- [equals](FormsFieldsServiceFilterReq.md#equals-1)
- [fromBinary](FormsFieldsServiceFilterReq.md#frombinary-1)
- [fromJson](FormsFieldsServiceFilterReq.md#fromjson-1)
- [fromJsonString](FormsFieldsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsFieldsServiceFilterReq**(`data?`): [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\> |

#### Returns

[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Overrides

Message\&lt;FormsFieldsServiceFilterReq\&gt;.constructor

#### Defined in

src/forms_fields.scailo_pb.ts:707

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/forms_fields.scailo_pb.ts:628

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/forms_fields.scailo_pb.ts:663

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/forms_fields.scailo_pb.ts:656

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/forms_fields.scailo_pb.ts:684

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/forms_fields.scailo_pb.ts:621

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/forms_fields.scailo_pb.ts:677

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/forms_fields.scailo_pb.ts:670

___

### name

• **name**: `string` = `""`

The name of the form field

**`Generated`**

from field: string name = 10;

#### Defined in

src/forms_fields.scailo_pb.ts:691

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/forms_fields.scailo_pb.ts:635

___

### sectionId

• **sectionId**: `bigint` = `protoInt64.zero`

The ID of the corresponding form section that the form field belongs to

**`Generated`**

from field: uint64 section_id = 12;

#### Defined in

src/forms_fields.scailo_pb.ts:705

___

### sortKey

• **sortKey**: [`FORM_FIELD_SORT_KEY`](../enums/FORM_FIELD_SORT_KEY.md) = `FORM_FIELD_SORT_KEY.FORM_FIELD_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.FORM_FIELD_SORT_KEY sort_key = 5;

#### Defined in

src/forms_fields.scailo_pb.ts:649

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/forms_fields.scailo_pb.ts:642

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form field

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

src/forms_fields.scailo_pb.ts:698

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_fields.scailo_pb.ts:714

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_fields.scailo_pb.ts:712

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsFieldsServiceFilterReq"``

#### Defined in

src/forms_fields.scailo_pb.ts:713

## Methods

### clone

▸ **clone**(): [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md) \| `PlainMessage`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md) \| `PlainMessage`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md) \| `PlainMessage`\<[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_fields.scailo_pb.ts:742

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Defined in

src/forms_fields.scailo_pb.ts:730

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Defined in

src/forms_fields.scailo_pb.ts:734

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsFieldsServiceFilterReq`](FormsFieldsServiceFilterReq.md)

#### Defined in

src/forms_fields.scailo_pb.ts:738
