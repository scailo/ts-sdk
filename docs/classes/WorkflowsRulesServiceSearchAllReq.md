[@kernelminds/scailo-sdk](../README.md) / [Exports](../modules.md) / WorkflowsRulesServiceSearchAllReq

# Class: WorkflowsRulesServiceSearchAllReq

Describes the request payload for performing a generic search operation on records

**`Generated`**

from message Scailo.WorkflowsRulesServiceSearchAllReq

## Hierarchy

- `Message`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\>

  ↳ **`WorkflowsRulesServiceSearchAllReq`**

## Table of contents

### Constructors

- [constructor](WorkflowsRulesServiceSearchAllReq.md#constructor)

### Properties

- [count](WorkflowsRulesServiceSearchAllReq.md#count)
- [entityUuid](WorkflowsRulesServiceSearchAllReq.md#entityuuid)
- [isActive](WorkflowsRulesServiceSearchAllReq.md#isactive)
- [offset](WorkflowsRulesServiceSearchAllReq.md#offset)
- [searchKey](WorkflowsRulesServiceSearchAllReq.md#searchkey)
- [sortKey](WorkflowsRulesServiceSearchAllReq.md#sortkey)
- [sortOrder](WorkflowsRulesServiceSearchAllReq.md#sortorder)
- [status](WorkflowsRulesServiceSearchAllReq.md#status)
- [fields](WorkflowsRulesServiceSearchAllReq.md#fields)
- [runtime](WorkflowsRulesServiceSearchAllReq.md#runtime)
- [typeName](WorkflowsRulesServiceSearchAllReq.md#typename)

### Methods

- [clone](WorkflowsRulesServiceSearchAllReq.md#clone)
- [equals](WorkflowsRulesServiceSearchAllReq.md#equals)
- [fromBinary](WorkflowsRulesServiceSearchAllReq.md#frombinary)
- [fromJson](WorkflowsRulesServiceSearchAllReq.md#fromjson)
- [fromJsonString](WorkflowsRulesServiceSearchAllReq.md#fromjsonstring)
- [getType](WorkflowsRulesServiceSearchAllReq.md#gettype)
- [toBinary](WorkflowsRulesServiceSearchAllReq.md#tobinary)
- [toJSON](WorkflowsRulesServiceSearchAllReq.md#tojson)
- [toJson](WorkflowsRulesServiceSearchAllReq.md#tojson-1)
- [toJsonString](WorkflowsRulesServiceSearchAllReq.md#tojsonstring)
- [equals](WorkflowsRulesServiceSearchAllReq.md#equals-1)
- [fromBinary](WorkflowsRulesServiceSearchAllReq.md#frombinary-1)
- [fromJson](WorkflowsRulesServiceSearchAllReq.md#fromjson-1)
- [fromJsonString](WorkflowsRulesServiceSearchAllReq.md#fromjsonstring-1)

## Constructors

### constructor

• **new WorkflowsRulesServiceSearchAllReq**(`data?`): [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `PartialMessage`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\> |

#### Returns

[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Overrides

Message\&lt;WorkflowsRulesServiceSearchAllReq\&gt;.constructor

#### Defined in

[src/workflows_rules.scailo_pb.ts:1885](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1885)

## Properties

### count

• **count**: `bigint` = `protoInt64.zero`

The number of records that need to be sent in the response. Returns all records if it is set to -1

**`Generated`**

from field: int64 count = 2;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1841](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1841)

___

### entityUuid

• **entityUuid**: `string` = `""`

The entity UUID that is to be used to filter records

**`Generated`**

from field: string entity_uuid = 6;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1869](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1869)

___

### isActive

• **isActive**: [`BOOL_FILTER`](../enums/BOOL_FILTER.md) = `BOOL_FILTER.BOOL_FILTER_ANY_UNSPECIFIED`

If true, then returns only active records. If false, then returns only inactive records

**`Generated`**

from field: Scailo.BOOL_FILTER is_active = 1;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1834](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1834)

___

### offset

• **offset**: `bigint` = `protoInt64.zero`

The number that need to be offset by before fetching the records

**`Generated`**

from field: uint64 offset = 3;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1848](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1848)

___

### searchKey

• **searchKey**: `string` = `""`

Describes the key with which the search operation needs to be performed

**`Generated`**

from field: string search_key = 11;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1883](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1883)

___

### sortKey

• **sortKey**: [`WORKFLOW_RULE_SORT_KEY`](../enums/WORKFLOW_RULE_SORT_KEY.md) = `WORKFLOW_RULE_SORT_KEY.WORKFLOW_RULE_SORT_KEY_ID_UNSPECIFIED`

The sort key that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.WORKFLOW_RULE_SORT_KEY sort_key = 5;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1862](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1862)

___

### sortOrder

• **sortOrder**: [`SORT_ORDER`](../enums/SORT_ORDER.md) = `SORT_ORDER.ASCENDING_UNSPECIFIED`

The sort order that is to be used to fetch the pagination response

**`Generated`**

from field: Scailo.SORT_ORDER sort_order = 4;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1855](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1855)

___

### status

• **status**: [`STANDARD_LIFECYCLE_STATUS`](../enums/STANDARD_LIFECYCLE_STATUS.md) = `STANDARD_LIFECYCLE_STATUS.ANY_UNSPECIFIED`

Limit the search space to the given status

**`Generated`**

from field: Scailo.STANDARD_LIFECYCLE_STATUS status = 10;

#### Defined in

[src/workflows_rules.scailo_pb.ts:1876](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1876)

___

### fields

▪ `Static` `Readonly` **fields**: `FieldList`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1892](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1892)

___

### runtime

▪ `Static` `Readonly` **runtime**: `ProtoRuntime` = `proto3`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1890](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1890)

___

### typeName

▪ `Static` `Readonly` **typeName**: ``"Scailo.WorkflowsRulesServiceSearchAllReq"``

#### Defined in

[src/workflows_rules.scailo_pb.ts:1891](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1891)

## Methods

### clone

▸ **clone**(): [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

Create a deep copy.

#### Returns

[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

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
| `other` | `undefined` \| ``null`` \| [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\> |

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

▸ **getType**(): `MessageType`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\>

Retrieve the MessageType of this message - a singleton that represents
the protobuf message declaration and provides metadata for reflection-
based operations.

#### Returns

`MessageType`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\>

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
| `a` | `undefined` \| [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\> |
| `b` | `undefined` \| [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md) \| `PlainMessage`\<[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)\> |

#### Returns

`boolean`

#### Defined in

[src/workflows_rules.scailo_pb.ts:1915](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1915)

___

### fromBinary

▸ **fromBinary**(`bytes`, `options?`): [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1903](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1903)

___

### fromJson

▸ **fromJson**(`jsonValue`, `options?`): [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1907](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1907)

___

### fromJsonString

▸ **fromJsonString**(`jsonString`, `options?`): [`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

[`WorkflowsRulesServiceSearchAllReq`](WorkflowsRulesServiceSearchAllReq.md)

#### Defined in

[src/workflows_rules.scailo_pb.ts:1911](https://github.com/scailo/ts-sdk/blob/c10a36b57201dfa5903d4b53efa1e62aa6208936/src/workflows_rules.scailo_pb.ts#L1911)
