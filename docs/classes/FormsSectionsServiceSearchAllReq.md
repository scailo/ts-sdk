[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / FormsSectionsServiceSearchAllReq

# Class: FormsSectionsServiceSearchAllReq

Describes the request payload for performing a generic search operation on forms sections

**`Generated`**

from message Scailo.FormsSectionsServiceSearchAllReq

## Hierarchy

- `Message`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\>

  ↳ **`FormsSectionsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](FormsSectionsServiceSearchAllReq.md#constructor)

### Properties

- [count](FormsSectionsServiceSearchAllReq.md#count)
- [entityUuid](FormsSectionsServiceSearchAllReq.md#entityuuid)
- [isActive](FormsSectionsServiceSearchAllReq.md#isactive)
- [offset](FormsSectionsServiceSearchAllReq.md#offset)
- [searchKey](FormsSectionsServiceSearchAllReq.md#searchkey)
- [sortKey](FormsSectionsServiceSearchAllReq.md#sortkey)
- [sortOrder](FormsSectionsServiceSearchAllReq.md#sortorder)
- [fields](FormsSectionsServiceSearchAllReq.md#fields)
- [runtime](FormsSectionsServiceSearchAllReq.md#runtime)
- [typeName](FormsSectionsServiceSearchAllReq.md#typename)

### Methods

- [clone](FormsSectionsServiceSearchAllReq.md#clone)
- [equals](FormsSectionsServiceSearchAllReq.md#equals)
- [fromBinary](FormsSectionsServiceSearchAllReq.md#frombinary)
- [fromJson](FormsSectionsServiceSearchAllReq.md#fromjson)
- [fromJsonString](FormsSectionsServiceSearchAllReq.md#fromjsonstring)
- [getType](FormsSectionsServiceSearchAllReq.md#gettype)
- [toBinary](FormsSectionsServiceSearchAllReq.md#tobinary)
- [toJSON](FormsSectionsServiceSearchAllReq.md#tojson)
- [toJson](FormsSectionsServiceSearchAllReq.md#tojson-1)
- [toJsonString](FormsSectionsServiceSearchAllReq.md#tojsonstring)
- [equals](FormsSectionsServiceSearchAllReq.md#equals-1)
- [fromBinary](FormsSectionsServiceSearchAllReq.md#frombinary-1)
- [fromJson](FormsSectionsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](FormsSectionsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new FormsSectionsServiceSearchAllReq**(`data?`): [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\> |

#### Returns

[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Overrides

Message\&lt;FormsSectionsServiceSearchAllReq\&gt;.constructor

#### Defined in

src/forms_sections.scailo_pb.ts:757

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/forms_sections.scailo_pb.ts:720

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter forms sections

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/forms_sections.scailo_pb.ts:748

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/forms_sections.scailo_pb.ts:713

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/forms_sections.scailo_pb.ts:727

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 10;

#### Defined in

src/forms_sections.scailo_pb.ts:755

___

### sortKey

• **sortKey**: [`FORM_SECTION_SORT_KEY`](../enums/FORM_SECTION_SORT_KEY.md) = `FORM_SECTION_SORT_KEY.FORM_SECTION_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the response

**`Generated`**

from field: Scailo.FORM_SECTION_SORT_KEY sort_key = 5;

#### Defined in

src/forms_sections.scailo_pb.ts:741

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/forms_sections.scailo_pb.ts:734

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/forms_sections.scailo_pb.ts:764

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/forms_sections.scailo_pb.ts:762

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.FormsSectionsServiceSearchAllReq"``

#### Defined in

src/forms_sections.scailo_pb.ts:763

## Methods

### clone

▸ **clone**(): [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md) \| `PlainMessage`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md) \| `PlainMessage`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md) \| `PlainMessage`\<[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/forms_sections.scailo_pb.ts:786

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:774

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:778

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`FormsSectionsServiceSearchAllReq`](FormsSectionsServiceSearchAllReq.md)

#### Defined in

src/forms_sections.scailo_pb.ts:782
