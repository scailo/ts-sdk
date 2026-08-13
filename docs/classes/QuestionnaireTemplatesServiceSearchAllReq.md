[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / QuestionnaireTemplatesServiceSearchAllReq

# Class: QuestionnaireTemplatesServiceSearchAllReq

Broad-spectrum search and lookup request for locating and paginating questionnaire templates via text matching.
This message encapsulates full-text query parameters, pagination controls, sorting keys,
lifecycle status constraints, and other core references.

**Note:** This is the primary message layout used for global search bars, fast-filtering dashboard
inputs, and omni-box search utilities where users need to match loose textual terms against
records while retaining structural pagination.

**`Generated`**

from message Scailo.QuestionnaireTemplatesServiceSearchAllReq

## Hierarchy

- `Message`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\>

  ↳ **`QuestionnaireTemplatesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](QuestionnaireTemplatesServiceSearchAllReq.md#constructor)

### Properties

- [count](QuestionnaireTemplatesServiceSearchAllReq.md#count)
- [entityUuid](QuestionnaireTemplatesServiceSearchAllReq.md#entityuuid)
- [isActive](QuestionnaireTemplatesServiceSearchAllReq.md#isactive)
- [offset](QuestionnaireTemplatesServiceSearchAllReq.md#offset)
- [searchKey](QuestionnaireTemplatesServiceSearchAllReq.md#searchkey)
- [sortKey](QuestionnaireTemplatesServiceSearchAllReq.md#sortkey)
- [sortOrder](QuestionnaireTemplatesServiceSearchAllReq.md#sortorder)
- [status](QuestionnaireTemplatesServiceSearchAllReq.md#status)
- [fields](QuestionnaireTemplatesServiceSearchAllReq.md#fields)
- [runtime](QuestionnaireTemplatesServiceSearchAllReq.md#runtime)
- [typeName](QuestionnaireTemplatesServiceSearchAllReq.md#typename)

### Methods

- [clone](QuestionnaireTemplatesServiceSearchAllReq.md#clone)
- [equals](QuestionnaireTemplatesServiceSearchAllReq.md#equals)
- [fromBinary](QuestionnaireTemplatesServiceSearchAllReq.md#frombinary)
- [fromJson](QuestionnaireTemplatesServiceSearchAllReq.md#fromjson)
- [fromJsonString](QuestionnaireTemplatesServiceSearchAllReq.md#fromjsonstring)
- [getType](QuestionnaireTemplatesServiceSearchAllReq.md#gettype)
- [toBinary](QuestionnaireTemplatesServiceSearchAllReq.md#tobinary)
- [toJSON](QuestionnaireTemplatesServiceSearchAllReq.md#tojson)
- [toJson](QuestionnaireTemplatesServiceSearchAllReq.md#tojson-1)
- [toJsonString](QuestionnaireTemplatesServiceSearchAllReq.md#tojsonstring)
- [equals](QuestionnaireTemplatesServiceSearchAllReq.md#equals-1)
- [fromBinary](QuestionnaireTemplatesServiceSearchAllReq.md#frombinary-1)
- [fromJson](QuestionnaireTemplatesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](QuestionnaireTemplatesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new QuestionnaireTemplatesServiceSearchAllReq**(`data?`): [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\> |

#### Returns

[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Overrides

Message\&lt;QuestionnaireTemplatesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1799](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1799)

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

[src/questionnaire_templates.scailo_pb.ts:1715](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1715)

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

[src/questionnaire_templates.scailo_pb.ts:1769](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1769)

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

[src/questionnaire_templates.scailo_pb.ts:1699](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1699)

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

[src/questionnaire_templates.scailo_pb.ts:1731](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1731)

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

[src/questionnaire_templates.scailo_pb.ts:1797](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1797)

___

### sortKey

• `Optional` **sortKey**: [`QUESTIONNAIRE_TEMPLATE_SORT_KEY`](../enums/QUESTIONNAIRE_TEMPLATE_SORT_KEY.md)

**`Optional`**

**`Description`**

The field used for sorting.

**`Generated`**

from field: optional Scailo.QUESTIONNAIRE_TEMPLATE_SORT_KEY sort_key = 5;

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1753](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1753)

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

[src/questionnaire_templates.scailo_pb.ts:1743](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1743)

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

[src/questionnaire_templates.scailo_pb.ts:1781](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1781)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1806](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1806)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1804](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1804)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.QuestionnaireTemplatesServiceSearchAllReq"``

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1805](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1805)

## Methods

### clone

▸ **clone**(): [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md) \| `PlainMessage`\<[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1829](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1829)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1817](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1817)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1821](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1821)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`QuestionnaireTemplatesServiceSearchAllReq`](QuestionnaireTemplatesServiceSearchAllReq.md)

#### Defined in

[src/questionnaire_templates.scailo_pb.ts:1825](https://github.com/scailo/ts-sdk/blob/c6e06d09250720c006b2c1e8bd2b3c90c5233eb7/src/questionnaire_templates.scailo_pb.ts#L1825)
