[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / PayrollParamsServiceSearchAllReq

# Class: PayrollParamsServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.PayrollParamsServiceSearchAllReq

## Hierarchy

- `Message`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\>

  ↳ **`PayrollParamsServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](PayrollParamsServiceSearchAllReq.md#constructor)

### Properties

- [count](PayrollParamsServiceSearchAllReq.md#count)
- [entityUuid](PayrollParamsServiceSearchAllReq.md#entityuuid)
- [isActive](PayrollParamsServiceSearchAllReq.md#isactive)
- [offset](PayrollParamsServiceSearchAllReq.md#offset)
- [searchKey](PayrollParamsServiceSearchAllReq.md#searchkey)
- [sortKey](PayrollParamsServiceSearchAllReq.md#sortkey)
- [sortOrder](PayrollParamsServiceSearchAllReq.md#sortorder)
- [status](PayrollParamsServiceSearchAllReq.md#status)
- [fields](PayrollParamsServiceSearchAllReq.md#fields)
- [runtime](PayrollParamsServiceSearchAllReq.md#runtime)
- [typeName](PayrollParamsServiceSearchAllReq.md#typename)

### Methods

- [clone](PayrollParamsServiceSearchAllReq.md#clone)
- [equals](PayrollParamsServiceSearchAllReq.md#equals)
- [fromBinary](PayrollParamsServiceSearchAllReq.md#frombinary)
- [fromJson](PayrollParamsServiceSearchAllReq.md#fromjson)
- [fromJsonString](PayrollParamsServiceSearchAllReq.md#fromjsonstring)
- [getType](PayrollParamsServiceSearchAllReq.md#gettype)
- [toBinary](PayrollParamsServiceSearchAllReq.md#tobinary)
- [toJSON](PayrollParamsServiceSearchAllReq.md#tojson)
- [toJson](PayrollParamsServiceSearchAllReq.md#tojson-1)
- [toJsonString](PayrollParamsServiceSearchAllReq.md#tojsonstring)
- [equals](PayrollParamsServiceSearchAllReq.md#equals-1)
- [fromBinary](PayrollParamsServiceSearchAllReq.md#frombinary-1)
- [fromJson](PayrollParamsServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](PayrollParamsServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new PayrollParamsServiceSearchAllReq**(`data?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Overrides

Message\&lt;PayrollParamsServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/payroll_params.scailo_pb.ts:1311](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1311)

## Properties

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

[src/payroll_params.scailo_pb.ts:1227](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1227)

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

[src/payroll_params.scailo_pb.ts:1281](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1281)

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

[src/payroll_params.scailo_pb.ts:1211](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1211)

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

[src/payroll_params.scailo_pb.ts:1243](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1243)

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

[src/payroll_params.scailo_pb.ts:1309](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1309)

___

### sortKey

• **sortKey**: [`PAYROLL_PARAM_SORT_KEY`](../enums/PAYROLL_PARAM_SORT_KEY.md) = `PAYROLL_PARAM_SORT_KEY.PAYROLL_PARAM_SORT_KEY_ID_UNSPECIFIED`

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: Scailo.PAYROLL_PARAM_SORT_KEY sort_key = 5;

#### Defined in

[src/payroll_params.scailo_pb.ts:1265](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1265)

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

[src/payroll_params.scailo_pb.ts:1255](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1255)

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

[src/payroll_params.scailo_pb.ts:1293](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1293)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/payroll_params.scailo_pb.ts:1318](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1318)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/payroll_params.scailo_pb.ts:1316](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1316)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.PayrollParamsServiceSearchAllReq"``

#### Defined in

[src/payroll_params.scailo_pb.ts:1317](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1317)

## Methods

### clone

▸ **clone**(): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md) \| `PlainMessage`\<[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/payroll_params.scailo_pb.ts:1341](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1341)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:1329](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1329)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:1333](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1333)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`PayrollParamsServiceSearchAllReq`](PayrollParamsServiceSearchAllReq.md)

#### Defined in

[src/payroll_params.scailo_pb.ts:1337](https://github.com/scailo/ts-sdk/blob/bc686eea7256b0ddca4f2e27b735c56b7c97bc21/src/payroll_params.scailo_pb.ts#L1337)
