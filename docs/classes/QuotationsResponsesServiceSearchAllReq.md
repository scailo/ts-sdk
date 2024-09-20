[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuotationsResponsesServiceSearchAllReq

# Class: QuotationsResponsesServiceSearchAllReq

Describes the response payload for performing a generic search operation on records

**`Generated`**

from message Scailo.QuotationsResponsesServiceSearchAllReq

## Hierarchy

- `Message`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\>

  ↳ **`QuotationsResponsesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QuotationsResponsesServiceSearchAllReq.md#constructor)

### Properties

- [count](QuotationsResponsesServiceSearchAllReq.md#count)
- [entityUuid](QuotationsResponsesServiceSearchAllReq.md#entityuuid)
- [isActive](QuotationsResponsesServiceSearchAllReq.md#isactive)
- [offset](QuotationsResponsesServiceSearchAllReq.md#offset)
- [searchKey](QuotationsResponsesServiceSearchAllReq.md#searchkey)
- [sortKey](QuotationsResponsesServiceSearchAllReq.md#sortkey)
- [sortOrder](QuotationsResponsesServiceSearchAllReq.md#sortorder)
- [status](QuotationsResponsesServiceSearchAllReq.md#status)
- [fields](QuotationsResponsesServiceSearchAllReq.md#fields)
- [runtime](QuotationsResponsesServiceSearchAllReq.md#runtime)
- [typeName](QuotationsResponsesServiceSearchAllReq.md#typename)

### Methods

- [clone](QuotationsResponsesServiceSearchAllReq.md#clone)
- [equals](QuotationsResponsesServiceSearchAllReq.md#equals)
- [fromBinary](QuotationsResponsesServiceSearchAllReq.md#frombinary)
- [fromJson](QuotationsResponsesServiceSearchAllReq.md#fromjson)
- [fromJsonString](QuotationsResponsesServiceSearchAllReq.md#fromjsonstring)
- [getType](QuotationsResponsesServiceSearchAllReq.md#gettype)
- [toBinary](QuotationsResponsesServiceSearchAllReq.md#tobinary)
- [toJSON](QuotationsResponsesServiceSearchAllReq.md#tojson)
- [toJson](QuotationsResponsesServiceSearchAllReq.md#tojson-1)
- [toJsonString](QuotationsResponsesServiceSearchAllReq.md#tojsonstring)
- [equals](QuotationsResponsesServiceSearchAllReq.md#equals-1)
- [fromBinary](QuotationsResponsesServiceSearchAllReq.md#frombinary-1)
- [fromJson](QuotationsResponsesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QuotationsResponsesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuotationsResponsesServiceSearchAllReq**(`data?`): [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\> |

#### Returns

[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Overrides

Message\&lt;QuotationsResponsesServiceSearchAllReq\&gt;.constructor

#### Defined in

src/quotations_responses.scailo_pb.ts:2083

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

src/quotations_responses.scailo_pb.ts:2039

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

src/quotations_responses.scailo_pb.ts:2067

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

src/quotations_responses.scailo_pb.ts:2032

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

src/quotations_responses.scailo_pb.ts:2046

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

src/quotations_responses.scailo_pb.ts:2081

___

### sortKey

• **sortKey**: [`QUOTATION_RESPONSE_SORT_KEY`](../enums/QUOTATION_RESPONSE_SORT_KEY.md) = `QUOTATION_RESPONSE_SORT_KEY.QUOTATION_RESPONSE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.QUOTATION_RESPONSE_SORT_KEY sort_key = 5;

#### Defined in

src/quotations_responses.scailo_pb.ts:2060

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

src/quotations_responses.scailo_pb.ts:2053

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

src/quotations_responses.scailo_pb.ts:2074

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

src/quotations_responses.scailo_pb.ts:2090

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

src/quotations_responses.scailo_pb.ts:2088

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuotationsResponsesServiceSearchAllReq"``

#### Defined in

src/quotations_responses.scailo_pb.ts:2089

## Methods

### clone

▸ **clone**(): [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md) \| `PlainMessage`\<[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

src/quotations_responses.scailo_pb.ts:2113

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:2101

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:2105

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuotationsResponsesServiceSearchAllReq`](QuotationsResponsesServiceSearchAllReq.md)

#### Defined in

src/quotations_responses.scailo_pb.ts:2109
