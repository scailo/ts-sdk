[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / CreditNotesServiceSearchAllReq

# Class: CreditNotesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.CreditNotesServiceSearchAllReq

## Hierarchy

- `Message`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\>

  ↳ **`CreditNotesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](CreditNotesServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](CreditNotesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](CreditNotesServiceSearchAllReq.md#consigneeclientid)
- [count](CreditNotesServiceSearchAllReq.md#count)
- [entityUuid](CreditNotesServiceSearchAllReq.md#entityuuid)
- [isActive](CreditNotesServiceSearchAllReq.md#isactive)
- [offset](CreditNotesServiceSearchAllReq.md#offset)
- [refFrom](CreditNotesServiceSearchAllReq.md#reffrom)
- [refId](CreditNotesServiceSearchAllReq.md#refid)
- [searchKey](CreditNotesServiceSearchAllReq.md#searchkey)
- [sortKey](CreditNotesServiceSearchAllReq.md#sortkey)
- [sortOrder](CreditNotesServiceSearchAllReq.md#sortorder)
- [status](CreditNotesServiceSearchAllReq.md#status)
- [fields](CreditNotesServiceSearchAllReq.md#fields)
- [runtime](CreditNotesServiceSearchAllReq.md#runtime)
- [typeName](CreditNotesServiceSearchAllReq.md#typename)

### Methods

- [clone](CreditNotesServiceSearchAllReq.md#clone)
- [equals](CreditNotesServiceSearchAllReq.md#equals)
- [fromBinary](CreditNotesServiceSearchAllReq.md#frombinary)
- [fromJson](CreditNotesServiceSearchAllReq.md#fromjson)
- [fromJsonString](CreditNotesServiceSearchAllReq.md#fromjsonstring)
- [getType](CreditNotesServiceSearchAllReq.md#gettype)
- [toBinary](CreditNotesServiceSearchAllReq.md#tobinary)
- [toJSON](CreditNotesServiceSearchAllReq.md#tojson)
- [toJson](CreditNotesServiceSearchAllReq.md#tojson-1)
- [toJsonString](CreditNotesServiceSearchAllReq.md#tojsonstring)
- [equals](CreditNotesServiceSearchAllReq.md#equals-1)
- [fromBinary](CreditNotesServiceSearchAllReq.md#frombinary-1)
- [fromJson](CreditNotesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](CreditNotesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new CreditNotesServiceSearchAllReq**(`data?`): [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\> |

#### Returns

[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Overrides

Message\&lt;CreditNotesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/credit_notes.scailo_pb.ts:2360

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

src/credit_notes.scailo_pb.ts:2358

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

src/credit_notes.scailo_pb.ts:2351

___

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/credit_notes.scailo_pb.ts:2287

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/credit_notes.scailo_pb.ts:2315

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/credit_notes.scailo_pb.ts:2280

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/credit_notes.scailo_pb.ts:2294

___

### refFrom

• **refFrom**: `string` = `""`

The associated reference

**`Generated`**

from field: string ref_from = 22;

#### Defined in

src/credit_notes.scailo_pb.ts:2336

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

src/credit_notes.scailo_pb.ts:2343

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/credit_notes.scailo_pb.ts:2329

___

### sortKey

• **sortKey**: [`CREDIT_NOTE_SORT_KEY`](../enums/CREDIT_NOTE_SORT_KEY.md) = `CREDIT_NOTE_SORT_KEY.CREDIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

src/credit_notes.scailo_pb.ts:2308

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/credit_notes.scailo_pb.ts:2301

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/credit_notes.scailo_pb.ts:2322

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/credit_notes.scailo_pb.ts:2367

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/credit_notes.scailo_pb.ts:2365

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceSearchAllReq"``

#### Defined in

src/credit_notes.scailo_pb.ts:2366

## Methods

### clone

▸ **clone**(): [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md) \| `PlainMessage`\<[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/credit_notes.scailo_pb.ts:2394

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2382

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2386

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`CreditNotesServiceSearchAllReq`](CreditNotesServiceSearchAllReq.md)

#### Defined in

src/credit_notes.scailo_pb.ts:2390
