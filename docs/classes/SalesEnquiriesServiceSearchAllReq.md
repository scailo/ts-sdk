[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / SalesEnquiriesServiceSearchAllReq

# Class: SalesEnquiriesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating sales enquiries via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

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

[src/sales_enquiries.scailo_pb.ts:3516](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3516)

## Properties

### buyerClientId

• `Optional` **buyerClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the prospective buyer client (the entity that would be financially responsible for the requested order).

**`Example`**

```ts
1051
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 buyer_client_id = 23;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3514](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3514)

___

### consigneeClientId

• `Optional` **consigneeClientId**: `bigint`

**`Optional`**

**`Description`**

The unique internal identifier of the prospective consignee client (the entity inquiring about receiving the goods or services).

**`Example`**

```ts
1050
```

**`Regex`**

^[1-9][0-9]*$

**`Format`**

Unsigned 64-bit integer greater than 0.

**`Generated`**

from field: optional uint64 consignee_client_id = 22;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3498](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3498)

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

[src/sales_enquiries.scailo_pb.ts:3400](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3400)

___

### entityUuid

• `Optional` **entityUuid**: `string`

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

from field: optional string entity_uuid = 6;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3454](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3454)

___

### isActive

• `Optional` **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md)

**`Optional`**

**`Description`**

Filter by active status. If `true`, then returns only active records. If `false`, then returns only inactive records.

**`Example`**

```ts
ANY
```

**`Generated`**

from field: optional Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3384](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3384)

___

### offset

• `Optional` **offset**: `bigint`

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

from field: optional uint64 offset = 3;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3416](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3416)

___

### searchKey

• `Optional` **searchKey**: `string`

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

from field: optional string search_key = 11;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3482](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3482)

___

### sortKey

• `Optional` **sortKey**: [`SALES_ENQUIRY_SORT_KEY`](../enums/SALES_ENQUIRY_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.SALES_ENQUIRY_SORT_KEY sort_key = 5;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3438](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3438)

___

### sortOrder

• `Optional` **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md)

**`Optional`**

**`Description`**

Sort direction.

**`Example`**

```ts
DESCENDING
```

**`Generated`**

from field: optional Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3428](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3428)

___

### status

• `Optional` **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md)

**`Optional`**

**`Description`**

Filter by lifecycle status (e.g., DRAFT, STANDING).

**`Example`**

```ts
STANDING
```

**`Generated`**

from field: optional Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3466](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3466)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3523](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3523)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3521](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3521)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.SalesEnquiriesServiceSearchAllReq"``

#### Defined in

[src/sales_enquiries.scailo_pb.ts:3522](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3522)

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

[src/sales_enquiries.scailo_pb.ts:3548](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3548)

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

[src/sales_enquiries.scailo_pb.ts:3536](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3536)

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

[src/sales_enquiries.scailo_pb.ts:3540](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3540)

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

[src/sales_enquiries.scailo_pb.ts:3544](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/sales_enquiries.scailo_pb.ts#L3544)
