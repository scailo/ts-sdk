[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceSearchAllReq

# Class: SalesEnquiriesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.SalesEnquiriesServiceSearchAllReq

## Hierarchy

- `Message`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\>

  ↳ **`SalesEnquiriesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](SalesEnquiriesServiceSearchAllReq.md#constructor)

### Properties

- [buyerClientId](SalesEnquiriesServiceSearchAllReq.md#buyerclientid)
- [consigneeClientId](SalesEnquiriesServiceSearchAllReq.md#consigneeclientid)
- [count](SalesEnquiriesServiceSearchAllReq.md#count)
- [entityUuid](SalesEnquiriesServiceSearchAllReq.md#entityuuid)
- [isActive](SalesEnquiriesServiceSearchAllReq.md#isactive)
- [offset](SalesEnquiriesServiceSearchAllReq.md#offset)
- [searchKey](SalesEnquiriesServiceSearchAllReq.md#searchkey)
- [sortKey](SalesEnquiriesServiceSearchAllReq.md#sortkey)
- [sortOrder](SalesEnquiriesServiceSearchAllReq.md#sortorder)
- [status](SalesEnquiriesServiceSearchAllReq.md#status)
- [fields](SalesEnquiriesServiceSearchAllReq.md#fields)
- [runtime](SalesEnquiriesServiceSearchAllReq.md#runtime)
- [typeName](SalesEnquiriesServiceSearchAllReq.md#typename)

### Methods

- [clone](SalesEnquiriesServiceSearchAllReq.md#clone)
- [equals](SalesEnquiriesServiceSearchAllReq.md#equals)
- [fromBinary](SalesEnquiriesServiceSearchAllReq.md#frombinary)
- [fromJson](SalesEnquiriesServiceSearchAllReq.md#fromjson)
- [fromJsonString](SalesEnquiriesServiceSearchAllReq.md#fromjsonstring)
- [getType](SalesEnquiriesServiceSearchAllReq.md#gettype)
- [toBinary](SalesEnquiriesServiceSearchAllReq.md#tobinary)
- [toJSON](SalesEnquiriesServiceSearchAllReq.md#tojson)
- [toJson](SalesEnquiriesServiceSearchAllReq.md#tojson-1)
- [toJsonString](SalesEnquiriesServiceSearchAllReq.md#tojsonstring)
- [equals](SalesEnquiriesServiceSearchAllReq.md#equals-1)
- [fromBinary](SalesEnquiriesServiceSearchAllReq.md#frombinary-1)
- [fromJson](SalesEnquiriesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](SalesEnquiriesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new SalesEnquiriesServiceSearchAllReq**(`data?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Overrides

Message\&lt;SalesEnquiriesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2781](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2781)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The ID of the buyer

**`Generated`**

from field: uint64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2779](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2779)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

The ID of the consignee

**`Generated`**

from field: uint64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2772](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2772)

___

### count

• **count**: `bigint` = `protoInt64.zero`

**`Mandatory`**

**`Description`**

Number of records to fetch. **Critical:** Use `-1` to retrieve all records. A value of `0` will return no results. Default is `0`.

**`Example`**

```ts
100
```

**`Regex`**

^(?:-1|0|[1-9][0-9]*)$

**`Format`**

Must be -1 or any non-negative integer (>= -1).

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2683](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2683)

___

### entityUuid

• **entityUuid**: `string` = `""`

**`Optional`**

**`Description`**

Filter by the organization UUID.

**`Example`**

```ts
"550e8400-e29b-41d4-a716-446655440000"
```

**`Regex`**

^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$

**`Format`**

If provided, must be a valid v4 UUID in canonical hyphenated form.

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2737](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2737)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2667](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2667)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

**`Optional`**

**`Description`**

Number of records to skip (offset) for pagination.

**`Example`**

```ts
0
```

**`Regex`**

^[0-9]+$

**`Format`**

Non-negative integer.

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2699](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2699)

___

### searchKey

• **searchKey**: `string` = `""`

**`Mandatory`**

**`Description`**

The search string to match against reference IDs.

**`Example`**

```ts
"Medical 2023"
```

**`Regex`**

.*

@format: May contain any UTF-8 characters.

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2765](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2765)

___

### sortKey

• **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md) = `SALES_ENQUIRY_SORT_KEY.SALES_ENQUIRY_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2721](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2721)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2711](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2711)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2749](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2749)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2788](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2788)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2786](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2786)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceSearchAllReq"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2787](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2787)

## Methods

### clone

▸ **clone**(): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md) \| `PlainMessage`\<[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2813](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2813)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2801](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2801)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2805](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2805)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`SalesEnquiriesServiceSearchAllReq`](SalesEnquiriesServiceSearchAllReq.md)

#### Defined in

[src/sales_enquiries.scailo_pb.ts:2809](https://github.com/scailo/ts-sdk/blob/148f367386b6d09cd3855fb0be1e28ca97edac90/src/sales_enquiries.scailo_pb.ts#L2809)
