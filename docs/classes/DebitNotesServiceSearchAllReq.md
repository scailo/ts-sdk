[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / DebitNotesServiceSearchAllReq

# Class: DebitNotesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.DebitNotesServiceSearchAllReq

## Hierarchy

- `Message`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\>

  ↳ **`DebitNotesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](DebitNotesServiceSearchAllReq.md#constructor)

### Properties

- [count](DebitNotesServiceSearchAllReq.md#count)
- [entityUuid](DebitNotesServiceSearchAllReq.md#entityuuid)
- [isActive](DebitNotesServiceSearchAllReq.md#isactive)
- [offset](DebitNotesServiceSearchAllReq.md#offset)
- [refFrom](DebitNotesServiceSearchAllReq.md#reffrom)
- [refId](DebitNotesServiceSearchAllReq.md#refid)
- [searchKey](DebitNotesServiceSearchAllReq.md#searchkey)
- [sortKey](DebitNotesServiceSearchAllReq.md#sortkey)
- [sortOrder](DebitNotesServiceSearchAllReq.md#sortorder)
- [status](DebitNotesServiceSearchAllReq.md#status)
- [vendorId](DebitNotesServiceSearchAllReq.md#vendorid)
- [fields](DebitNotesServiceSearchAllReq.md#fields)
- [runtime](DebitNotesServiceSearchAllReq.md#runtime)
- [typeName](DebitNotesServiceSearchAllReq.md#typename)

### Methods

- [clone](DebitNotesServiceSearchAllReq.md#clone)
- [equals](DebitNotesServiceSearchAllReq.md#equals)
- [fromBinary](DebitNotesServiceSearchAllReq.md#frombinary)
- [fromJson](DebitNotesServiceSearchAllReq.md#fromjson)
- [fromJsonString](DebitNotesServiceSearchAllReq.md#fromjsonstring)
- [getType](DebitNotesServiceSearchAllReq.md#gettype)
- [toBinary](DebitNotesServiceSearchAllReq.md#tobinary)
- [toJSON](DebitNotesServiceSearchAllReq.md#tojson)
- [toJson](DebitNotesServiceSearchAllReq.md#tojson-1)
- [toJsonString](DebitNotesServiceSearchAllReq.md#tojsonstring)
- [equals](DebitNotesServiceSearchAllReq.md#equals-1)
- [fromBinary](DebitNotesServiceSearchAllReq.md#frombinary-1)
- [fromJson](DebitNotesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](DebitNotesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new DebitNotesServiceSearchAllReq**(`data?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Overrides

Message\&lt;DebitNotesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/debit_notes.scailo_pb.ts:2254

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/debit_notes.scailo_pb.ts:2189

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/debit_notes.scailo_pb.ts:2217

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/debit_notes.scailo_pb.ts:2182

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/debit_notes.scailo_pb.ts:2196

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/debit_notes.scailo_pb.ts:2238

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/debit_notes.scailo_pb.ts:2245

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/debit_notes.scailo_pb.ts:2231

___

### sortKey

• **sortKey**: [`DEBIT_NOTE_SORT_KEY`](../enums/DEBIT_NOTE_SORT_KEY.md) = `DEBIT_NOTE_SORT_KEY.DEBIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.DEBIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

src/debit_notes.scailo_pb.ts:2210

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/debit_notes.scailo_pb.ts:2203

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/debit_notes.scailo_pb.ts:2224

___

### vendorId

• **vendorId**: `bigint` = `protoInt64.zero`

The ID of the associated vendor

**`Generated`**

from field: uint64 vendor_id = 25;

#### Defined in

src/debit_notes.scailo_pb.ts:2252

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/debit_notes.scailo_pb.ts:2261

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/debit_notes.scailo_pb.ts:2259

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.DebitNotesServiceSearchAllReq"``

#### Defined in

src/debit_notes.scailo_pb.ts:2260

## Methods

### clone

▸ **clone**(): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/debit_notes.scailo_pb.ts:2287

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2275

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2279

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`DebitNotesServiceSearchAllReq`](DebitNotesServiceSearchAllReq.md)

#### Defined in

src/debit_notes.scailo_pb.ts:2283
