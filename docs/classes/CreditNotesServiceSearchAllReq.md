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

[src/credit_notes.scailo_pb.ts:3209](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3209)

## Properties

### buyerClientId

• **buyerClientId**: `bigint` = `protoInt64.zero`

The associated buyer client ID of the linked sales order

**`Generated`**

from field: uint64 buyer_client_id = 51;

#### Defined in

[src/credit_notes.scailo_pb.ts:3207](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3207)

___

### consigneeClientId

• **consigneeClientId**: `bigint` = `protoInt64.zero`

Sales Order related filters
The associated consignee client ID of the linked sales order

**`Generated`**

from field: uint64 consignee_client_id = 50;

#### Defined in

[src/credit_notes.scailo_pb.ts:3200](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3200)

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

[src/credit_notes.scailo_pb.ts:3096](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3096)

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

[src/credit_notes.scailo_pb.ts:3150](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3150)

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

[src/credit_notes.scailo_pb.ts:3080](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3080)

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

[src/credit_notes.scailo_pb.ts:3112](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3112)

___

### refFrom

• **refFrom**: [`CREDIT_NOTE_REF_FROM`](../enums/CREDIT_NOTE_REF_FROM.md) = `CREDIT_NOTE_REF_FROM.CREDIT_NOTE_REF_FROM_ANY_UNSPECIFIED`

The associated reference

**`Generated`**

from field: Scailo.CREDIT_NOTE_REF_FROM ref_from = 22;

#### Defined in

[src/credit_notes.scailo_pb.ts:3185](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3185)

___

### refId

• **refId**: `bigint` = `protoInt64.zero`

The associated ID of the reference

**`Generated`**

from field: uint64 ref_id = 23;

#### Defined in

[src/credit_notes.scailo_pb.ts:3192](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3192)

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

[src/credit_notes.scailo_pb.ts:3178](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3178)

___

### sortKey

• **sortKey**: [`CREDIT_NOTE_SORT_KEY`](../enums/CREDIT_NOTE_SORT_KEY.md) = `CREDIT_NOTE_SORT_KEY.CREDIT_NOTE_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.CREDIT_NOTE_SORT_KEY sort_key = 5;

#### Defined in

[src/credit_notes.scailo_pb.ts:3134](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3134)

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

[src/credit_notes.scailo_pb.ts:3124](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3124)

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

[src/credit_notes.scailo_pb.ts:3162](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3162)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/credit_notes.scailo_pb.ts:3216](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3216)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/credit_notes.scailo_pb.ts:3214](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3214)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.CreditNotesServiceSearchAllReq"``

#### Defined in

[src/credit_notes.scailo_pb.ts:3215](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3215)

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

[src/credit_notes.scailo_pb.ts:3243](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3243)

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

[src/credit_notes.scailo_pb.ts:3231](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3231)

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

[src/credit_notes.scailo_pb.ts:3235](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3235)

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

[src/credit_notes.scailo_pb.ts:3239](https://github.com/scailo/ts-sdk/blob/5a2267559695586190ebf6471cda3cb644ff1ee9/src/credit_notes.scailo_pb.ts#L3239)
