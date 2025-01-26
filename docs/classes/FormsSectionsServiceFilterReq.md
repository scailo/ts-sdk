[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsServiceFilterReq

# Class: FormsSectionsServiceFilterReq

Describes the base request payload of a filter search

**`Generated`**

from message Scailo.FormsSectionsServiceFilterReq

## Hierarchy

- `Message`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\>

  ↳ **`FormsSectionsServiceFilterReq`**

## Table of contents

### Constructors

- [constructor](FormsSectionsServiceFilterReq.md#constructor)

### Properties

- [code](FormsSectionsServiceFilterReq.md#code)
- [count](FormsSectionsServiceFilterReq.md#count)
- [creationTimestampEnd](FormsSectionsServiceFilterReq.md#creationtimestampend)
- [creationTimestampStart](FormsSectionsServiceFilterReq.md#creationtimestampstart)
- [entityUuid](FormsSectionsServiceFilterReq.md#entityuuid)
- [isActive](FormsSectionsServiceFilterReq.md#isactive)
- [modificationTimestampEnd](FormsSectionsServiceFilterReq.md#modificationtimestampend)
- [modificationTimestampStart](FormsSectionsServiceFilterReq.md#modificationtimestampstart)
- [name](FormsSectionsServiceFilterReq.md#name)
- [offset](FormsSectionsServiceFilterReq.md#offset)
- [sortKey](FormsSectionsServiceFilterReq.md#sortkey)
- [sortOrder](FormsSectionsServiceFilterReq.md#sortorder)
- [type](FormsSectionsServiceFilterReq.md#type)
- [fields](FormsSectionsServiceFilterReq.md#fields)
- [runtime](FormsSectionsServiceFilterReq.md#runtime)
- [typeName](FormsSectionsServiceFilterReq.md#typename)

### Methods

- [clone](FormsSectionsServiceFilterReq.md#clone)
- [equals](FormsSectionsServiceFilterReq.md#equals)
- [fromBinary](FormsSectionsServiceFilterReq.md#frombinary)
- [fromJson](FormsSectionsServiceFilterReq.md#fromjson)
- [fromJsonString](FormsSectionsServiceFilterReq.md#fromjsonstring)
- [getType](FormsSectionsServiceFilterReq.md#gettype)
- [toBinary](FormsSectionsServiceFilterReq.md#tobinary)
- [toJSON](FormsSectionsServiceFilterReq.md#tojson)
- [toJson](FormsSectionsServiceFilterReq.md#tojson-1)
- [toJsonString](FormsSectionsServiceFilterReq.md#tojsonstring)
- [equals](FormsSectionsServiceFilterReq.md#equals-1)
- [fromBinary](FormsSectionsServiceFilterReq.md#frombinary-1)
- [fromJson](FormsSectionsServiceFilterReq.md#fromjson-1)
- [fromJsonString](FormsSectionsServiceFilterReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsServiceFilterReq**(`data?`): [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\> |

#### Returns

[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Overrides

Message\&lt;FormsSectionsServiceFilterReq\&gt;.constructor

#### Defined in

src/forms_sections.scailo_pb.ts:603

## Properties

### code

• **code**: `string` = `""`

The unique code by which the form section is classified

**`Generated`**

from field: string code = 21;

#### Defined in

src/forms_sections.scailo_pb.ts:601

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/forms_sections.scailo_pb.ts:524

___

### creationTimestampEnd

• **creationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_end = 102;

#### Defined in

src/forms_sections.scailo_pb.ts:559

___

### creationTimestampStart

• **creationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by creation

**`Generated`**

from field: uint64 creation_timestamp_start = 101;

#### Defined in

src/forms_sections.scailo_pb.ts:552

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 8;

#### Defined in

src/forms_sections.scailo_pb.ts:580

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/forms_sections.scailo_pb.ts:517

___

### modificationTimestampEnd

• **modificationTimestampEnd**: `bigint` = `protoInt64.zero`

The maximum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_end = 104;

#### Defined in

src/forms_sections.scailo_pb.ts:573

___

### modificationTimestampStart

• **modificationTimestampStart**: `bigint` = `protoInt64.zero`

The minimum timestamp that needs to be considered to filter by modification

**`Generated`**

from field: uint64 modification_timestamp_start = 103;

#### Defined in

src/forms_sections.scailo_pb.ts:566

___

### name

• **name**: `string` = `""`

The name of the form section

**`Generated`**

from field: string name = 10;

#### Defined in

src/forms_sections.scailo_pb.ts:587

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/forms_sections.scailo_pb.ts:531

___

### sortKey

• **sortKey**: [`FORM_SECTION_SORT_KEY`](../enums/FORM_SECTION_SORT_KEY.md) = `FORM_SECTION_SORT_KEY.FORM_SECTION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.FORM_SECTION_SORT_KEY sort_key = 5;

#### Defined in

src/forms_sections.scailo_pb.ts:545

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/forms_sections.scailo_pb.ts:538

___

### type

• **type**: [`FORM_TYPE`](../enums/FORM_TYPE.md) = `FORM_TYPE.FORM_TYPE_ANY_UNSPECIFIED`

The type of the form section

**`Generated`**

from field: Scailo.FORM_TYPE type = 11;

#### Defined in

src/forms_sections.scailo_pb.ts:594

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_sections.scailo_pb.ts:610

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_sections.scailo_pb.ts:608

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsServiceFilterReq"``

#### Defined in

src/forms_sections.scailo_pb.ts:609

## Methods

### clone

▸ **clone**(): [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

Create a deep copy.

#### Returns

[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md) \| `PlainMessage`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\>

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
| `a` | `undefined` \| [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md) \| `PlainMessage`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\> |
| `b` | `undefined` \| [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md) \| `PlainMessage`\<[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_sections.scailo_pb.ts:638

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:626

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:630

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceFilterReq`](FormsSectionsServiceFilterReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:634
